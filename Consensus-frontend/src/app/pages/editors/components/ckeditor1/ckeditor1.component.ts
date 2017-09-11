import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../shared/formValidation/validation.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import {TenantService} from '../../../../../restApi/tetants.services'
//import swal from 'sweetalert2'

//import './ckeditor1.loader';
//import 'ckeditor';
declare var swal: any;

@Component({
  selector: 'ckeditor1-component',
  templateUrl: './ckeditor1.html',
  styleUrls: ['./ckeditor1.scss']
})





export class Ckeditor1 implements OnInit{
  //public ckeditorContent:string = '<p>Tenants List</p>';
  userForm: any;
  public tenants:any;
  public genders = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
  ];
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };
title:any;
  constructor(
    private formBuilder: FormBuilder,
    private tenantService: TenantService,
    private _flashMessagesService: FlashMessagesService
  ) {



    this.userForm = this.formBuilder.group({
     // 'name': ['', Validators.required],
      'firstName': ['', [Validators.required,Validators.minLength(2),Validators.maxLength(16),ValidationService.nameOnly]],
      'lastName': ['', [Validators.required,Validators.minLength(2),Validators.maxLength(16),ValidationService.nameOnly]],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'gender': [''],
      'status':[''],
      'noOfDependent':[''],'hobbies':[''],'invite':[false]
      //'profile': ['', [Validators.required, Validators.minLength(10)]]
    });


  }



saveUser() {
  if (this.userForm.dirty && this.userForm.valid) {
    //alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    console.log(this.userForm.value);

    this.tenantService.addTenant(this.userForm.value).then(() => {
      console.log("sucess")
      this.showAlert();
      this.userForm.reset()

    }, error => {
      console.log(error);
      console.log("failed")
      //FAILURE
      this.showAlertforExistingTenant();
  })




  }


}

  showAlert() {
    swal({
      title: 'Tenant successfully added',

      type: 'success',
      //showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
     // confirmButtonText: 'Yes, delete it!'
    })
  }

  showAlertforExistingTenant() {
    swal({
      title: 'Tenant already existed',

      type: 'warning',
      //showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#d33',
      // confirmButtonText: 'Yes, delete it!'
    })
  }

  ngOnInit(): void {
    console.log("in ngOnInit in 1");
   // this._flashMessagesService.show('We are in about component!', 'alert-success');

  }

  submitForm(form: any): void{
    console.log('Form Data: ');
    form.postBy={

      userId:localStorage.getItem('user_id')

    };
    var t=localStorage.getItem('communityId')
    console.log(t);
    form.community_id=t;

    console.log(form);
    this.tenantService.addTenant(form).then(() => {
      this.showAlert();
    })

  }




}
