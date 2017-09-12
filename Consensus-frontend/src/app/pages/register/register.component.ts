import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import {TenantService} from '../../../restApi/tetants.services';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {

  public form:FormGroup;
  public name:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;tenants:any;tenantId=[];tenantName:any;tenantsPayment:any;tenantp=[];month1=[];year=[];ExpensesTenantList=[];setb:boolean;list=[]

  public submitted:boolean = false;

  cities = [{'name': 'SF'}, {'name': 'NYC'}, {'name': 'Buffalo'}];
  month = [{'name': '----','id':0},{'name': 'January','id':1}, {'name': 'February','id':2}, {'name': 'March','id':3},
    {'name': 'April','id':4}, {'name': 'May','id':5}, {'name': 'June','id':6},
    {'name': 'July','id':7}, {'name': 'August','id':8}, {'name': 'September','id':9},
    {'name': 'October','id':10}, {'name': 'November','id':11}, {'name': 'December','id':12}];
  selectedMonth :any;

  ngOnInit(){ //override
    this.selectedMonth = this.month[0];
  }

  constructor(fb:FormBuilder,
              private tenantService:TenantService,
              private authService: AuthService) {



    this.tenantService.getTenantsByCommunity()
      .then(data => {
        this.tenants = data;

        for(var  i =0;i <this.tenants.length;i++){
          if(this.tenants[i].email == localStorage.getItem("userEmail") )
          {
           this.tenantId=this.tenants[i]._id;
           this.tenantName=this.tenants[i].firstName+""+this.tenants[i].lastName

          }
        }
        //this.setb=false;
        this.setb=true;
        this.tenantService.getTenantsPayment().then(
          data => {
            this.tenantsPayment = data;
            console.log(this.tenantsPayment);

            if( this.tenantsPayment.length >0){


              for (var j = 0; j < this.tenantsPayment.length; j++) {
                //  console.log("arary is  "+this.tenantsId[i] +" "+this.tenantsPayment[j].tenant_id);
                if (this.tenantId == this.tenantsPayment[j].tenant_id) {

                    this.tenantp.push(this.tenantsPayment[j].amountPaid);

                  this.month1.push(this.tenantsPayment[j].myDate.jsdate);

                }
              /*  else{
                  j++
                }*/
              }

              for (var i = 0; i < this.tenantp.length; i++) {
                this.ExpensesTenantList.push(
                  {
                    amountPaid: this.tenantp[i],
                    month: this.month1[i],


                  });
              }

                console.log(this.ExpensesTenantList);


              if(this.ExpensesTenantList[0]['amountPaid'] === undefined){
                this.setb=false;
              }




            }
          });



      });



  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }

  onChangeMonth(month) {


    this.tenantp=[];this.tenantName=[]; this.ExpensesTenantList=[];this.month1=[];this.year=[];
    this.tenantService.getTenantsByCommunity()
      .then(data => {
        this.tenants = data;

        for(var  i =0;i <this.tenants.length;i++){
          if(this.tenants[i].email == localStorage.getItem("userEmail") )
          {
            this.tenantId=this.tenants[i]._id;
            this.tenantName=this.tenants[i].firstName+""+this.tenants[i].lastName

          }
        }
        //this.setb=false;
        this.tenantService.getTenantsPayment().then(
          data => {
            this.tenantsPayment = data;

            if( this.tenantsPayment.length >0){


              for (var j = 0; j < this.tenantsPayment.length; j++) {
                //  console.log("arary is  "+this.tenantsId[i] +" "+this.tenantsPayment[j].tenant_id);
                if (this.tenantId == this.tenantsPayment[j].tenant_id) {

                  this.tenantp.push(this.tenantsPayment[j].amountPaid);

                  this.month1.push(this.tenantsPayment[j].myDate.jsdate);
                  this.year.push(this.tenantsPayment[j].myDate.date.month);
                }
                else{
                  j++
                }
              }

              for (var i = 0; i < this.tenantp.length; i++) {
                this.ExpensesTenantList.push(
                  {
                    amountPaid: this.tenantp[i],
                    month: this.month1[i],
                    year: this.year[i]

                  });
              }

              console.log(this.ExpensesTenantList);

              var temp=[];

              if(month.name == "----"  && month.id == 0){

                console.log("Here is --- in the month --  "+JSON.stringify(this.ExpensesTenantList));
                for(var  i =0;i <this.ExpensesTenantList.length;i++) {
                 temp.push(this.ExpensesTenantList[i]);
                }
              }

              else {
                for (var i = 0; i < this.ExpensesTenantList.length; i++) {

                  if (this.ExpensesTenantList[i]['year'] == month.id) {

                    temp.push(this.ExpensesTenantList[i])
                  }
                }

              }
              console.log(temp);
              this.ExpensesTenantList=temp;

            }
          });



      });


    // sort by month




  }
}
