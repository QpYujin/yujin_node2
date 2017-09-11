import {Component} from '@angular/core';

import {TenantService} from '../../../../../restApi/tetants.services';

@Component({
  selector: 'chartist-js',
  templateUrl: './chartistJs.html',
  styleUrls: ['./chartistJs.scss']
})

export class ChartistJs {

  tenants:any;tenantsPayment:any;
  data:any;
  query: string = '';
  tenantsId=[];
  tenantp=[];tenantName=[]; ExpensesTenantList=[];month1=[];year=[];sortedExpenses=[];name=[]
  setBoolean:boolean

  cities = [{'name': 'SF'}, {'name': 'NYC'}, {'name': 'Buffalo'}];
  month = [{'name': '----','id':'0'},{'name': 'January','id':'1'}, {'name': 'February','id':'2'}, {'name': 'March','id':'3'},
    {'name': 'April','id':'4'}, {'name': 'May','id':'5'}, {'name': 'June','id':'6'},
    {'name': 'July','id':'7'}, {'name': 'August','id':'8'}, {'name': 'September','id':'9'},
    {'name': 'October','id':'10'}, {'name': 'November','id':'11'}, {'name': 'December','id':'12'}];
  selectedMonth :any;

  ngOnInit(){ //override
    this.selectedMonth = this.month[0];
  }
  constructor( private tenantService:TenantService) {
    let date = new Date();
    let iMonth = date.getMonth();
    this.selectedMonth = this.month[iMonth];
    this.setBoolean =true;
    this.tenantService.getTenantsByCommunity().then(
      data => {
        this.tenants = data;
        this.tenantService.getTenantsPayment().then(
          data => {
            this.tenantsPayment = data;
            for(var  i =0;i <this.tenants.length;i++){
              this.tenantsId.push( this.tenants[i]._id);
              this.tenantName.push( this.tenants[i].firstName+" "+this.tenants[i].lastName);
            }
            console.log("arary is  "+this.tenantsId);
            console.log("arary is  "+this.tenantName);
            for(var  i =0;i <this.tenantsId.length;i++){
              for(var  j =0; j<this.tenantsPayment.length;j++){
                //  console.log("arary is  "+this.tenantsId[i] +" "+this.tenantsPayment[j].tenant_id);
                if(this.tenantsId[i] == this.tenantsPayment[j].tenant_id){
                  if(this.tenantsPayment[j].amountPaid == null || this.tenantsPayment[j].amountPaid == ""){
                    this.tenantp.push("Unpaid");
                  }
                  else {
                    this.tenantp.push(this.tenantsPayment[j].amountPaid);
                  }
                  this.month1.push( this.tenantsPayment[j].month);
                  this.year.push( this.tenantsPayment[j].year);
                  this.name.push(this.getTenantname(this.tenantsPayment[j].tenant_id,this.tenants));
                }
              }
            }

            console.log(this.tenantp)

            for (var i=0; i<this.tenantsPayment.length; i++) {
              this.ExpensesTenantList.push(
                {

                  TenantName: this.name[i],
                  // TenantId: this.tenantId[i],
                  amountPaid:this.tenantp[i],
                  month:this.month1[i],
                  year:this.year[i]
                  //monthYear: $scope.month_year[i]


                });
            }
            console.log("Tenant payment list is "+JSON.stringify(this.ExpensesTenantList));
          });
      });
  }

  isCurrentYear(year){
    let date = new Date();
    if (date.getFullYear() == year) return true;
    return false;
  }


  onChangeMonth(month) {
    console.log("This is selected month"+JSON.stringify(month));
    var t ;var d;
    //this.monthId= month.id;
    this.setBoolean =true;
    this.tenantp=[];this.tenantName=[]; this.ExpensesTenantList=[];this.month1=[];this.year=[];this.sortedExpenses=[];this.tenantsId=[];this.name=[]
    this.tenantService.getTenantsByCommunity()
      .then(data => {
        this.tenants = data;

        this.tenantService.getTenantsPayment()
          .then(data => {
            this.tenantsPayment = data;

            this.tenantsPayment = data;
            for(var  i =0;i <this.tenants.length;i++){
              this.tenantsId.push( this.tenants[i]._id);
              this.tenantName.push( this.tenants[i].firstName+" "+this.tenants[i].lastName);
            }
            console.log("arary is  "+this.tenantsId);
            console.log("arary is  "+this.tenantName);
            for(var  i =0;i <this.tenantsId.length;i++){
              for(var  j =0; j<this.tenantsPayment.length;j++){
                //  console.log("arary is  "+this.tenantsId[i] +" "+this.tenantsPayment[j].tenant_id);
                if(this.tenantsId[i] == this.tenantsPayment[j].tenant_id){
                  if(this.tenantsPayment[j].amountPaid == null || this.tenantsPayment[j].amountPaid == ""){
                    this.tenantp.push("Unpaid");
                  }
                  else {
                    this.tenantp.push(this.tenantsPayment[j].amountPaid);
                  }
                  this.month1.push( this.tenantsPayment[j].month);
                  this.year.push( this.tenantsPayment[j].year);
                  this.name.push(this.getTenantname(this.tenantsPayment[j].tenant_id,this.tenants));
                }
              }
            }

            console.log(this.tenantp)

            for (var i=0; i<this.tenantsPayment.length; i++) {
              this.ExpensesTenantList.push(
                {

                  TenantName: this.name[i],
                  // TenantId: this.tenantId[i],
                  amountPaid:this.tenantp[i],
                  month:this.month1[i],
                  year:this.year[i]
                  //monthYear: $scope.month_year[i]


                });
            }


            console.log("Before sortiing "+JSON.stringify(this.ExpensesTenantList));

            for(var  i =0;i <this.ExpensesTenantList.length;i++){

              if(this.ExpensesTenantList[i].month == month.name){
                this.sortedExpenses.push(this.ExpensesTenantList[i]);

              }

            }

            console.log("After  "+JSON.stringify(this.sortedExpenses));

            if(month.name == "----" && this.sortedExpenses.length == 0 || this.sortedExpenses == null){

              console.log("Here is --- in the month --  "+JSON.stringify(this.ExpensesTenantList));
              for(var  i =0;i <this.ExpensesTenantList.length;i++) {
                this.sortedExpenses.push(this.ExpensesTenantList[i]);
              }
            }
            if(this.sortedExpenses.length == 0){
              this.setBoolean =false;
            }
            else{
              this.setBoolean =true;
            }
            this.ExpensesTenantList=this.sortedExpenses;
            this.sortedExpenses=[];


            console.log(JSON.stringify(this.ExpensesTenantList));

          });

      });


  }


  getTenantname(tenantId, tenants):any{

    var n;

    for(var  i =0;i <tenants.length;i++){
      if(tenantId == tenants[i]._id){
        n=tenants[i].firstName+tenants[i].lastName


      }
    }
    return n;

  }





}
