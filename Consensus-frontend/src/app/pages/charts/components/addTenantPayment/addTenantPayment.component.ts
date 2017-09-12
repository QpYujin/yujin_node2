import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../shared/formValidation/validation.service';
import {TenantService} from '../../../../../restApi/tetants.services';

import {IMyDpOptions, IMyDateModel} from 'mydatepicker';



declare var swal: any;



@Component({
  selector: 'addTenantPayment',
  templateUrl: './addTenantPayment.html',
  styleUrls: ['./addTenantPayment.scss'],

})



export class AddTenantPayment {
  example:any;
  tenants:any;tenantPaymentForm:any;userForm: any;
  isValid:Boolean;tenantname="";

  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  };


  constructor(protected tenantService: TenantService,
              private formBuilder: FormBuilder,) {

   // let v="f21572c8-7ef6-41a2-bfde-79a96782a86b";
    //this.getNamebyTenantId(v);
    this.example= { first: '', last: '' };
    this.tenantService.getTenantsByCommunity()
      .then(data => {
        this.tenants = data;

      });


    this.tenantPaymentForm = this.formBuilder.group({

     /* 'month': ['', Validators.required],
      'day': ['', Validators.required],
      'year': ['', Validators.required],*/
      'tenant_id': ['', Validators.required],
      'amountPaid': ['', [Validators.required, Validators.minLength(1),Validators.maxLength(16),ValidationService.numbersOnly]],
      'comment': ['', [Validators.minLength(6),Validators.maxLength(100)]],
      'tenantName':[null],
       'myDate': [null, Validators.required]
    });

  }


  setDate(): void {
    // Set today date using the patchValue function
    let date = new Date();
    this.tenantPaymentForm.patchValue({myDate: {
      date: {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()}
    }});
  }

  clearDate(): void {
    // Clear the date using the patchValue function
    this.tenantPaymentForm.patchValue({myDate: null});
  }

  saveTenant() {
    if (this.tenantPaymentForm.dirty && this.tenantPaymentForm.valid) {
      //alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);

      this.showAlert();

      let name = this.getNamebyTenantId(this.example.first);

      this.tenantPaymentForm.patchValue({
        tenantName: name
      });

      console.log(this.tenantPaymentForm.value);
      this.tenantService.addTenantPayment(this.tenantPaymentForm.value).then(() => {
        this.tenantPaymentForm.reset();
      })
    }
  }
  getNamebyTenantId(id){

        for(var  i =0;i <this.tenants.length;i++){
         if(this.tenants[i]._id == id){
           console.log(this.tenants[i].firstName+""+this.tenants[i].lastName);
           this.tenantname=this.tenants[i].firstName+""+this.tenants[i].lastName;
            break;
            }
          }
  return this.tenantname;
  }


  submitForm(form: any): void {
    console.log('Form Data: ');
    this.tenantService.addTenantPayment(form).then(() => {
    this.showAlert();

    });


  }

  showAlert() {
    swal({
      title: 'Tenant Payment successfully added',

      type: 'success',
      //showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      // confirmButtonText: 'Yes, delete it!'
    })
  }


}
