import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../shared/formValidation/validation.service';
import {TenantService} from '../../../../../restApi/tetants.services';





declare var swal: any;



@Component({
  selector: 'addTenantPayment',
  templateUrl: './addTenantPayment.html',
  styleUrls: ['./addTenantPayment.scss'],

})

export class AddTenantPayment {

  tenants:any;tenantPaymentForm:any;userForm: any;
  isValid:Boolean;
  constructor(protected tenantService: TenantService,
              private formBuilder: FormBuilder,) {

    this.tenantPaymentForm = this.formBuilder.group({
      // 'name': ['', Validators.required],
      'month': ['', Validators.required],
      'day': ['', Validators.required],
      'year': ['', Validators.required],
      'tenant_id': ['', Validators.required],
      'amountPaid': ['', [Validators.required, Validators.minLength(1),Validators.maxLength(16),ValidationService.numbersOnly]],
      'comment': ['', [Validators.minLength(6),Validators.maxLength(100)]],

    });



    this.tenantService.getTenantsByCommunity()
      .then(data => {
        this.tenants = data;
        //console.log(this.tenants[0]._id);
      });
  }


  saveTenant() {
    if (this.tenantPaymentForm.dirty && this.tenantPaymentForm.valid) {
      //alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    }
        this.showAlert();
    console.log(this.tenantPaymentForm.value);
        this.tenantService.addTenantPayment(this.tenantPaymentForm.value).then(() => {
          this.tenantPaymentForm.reset();
        })
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
