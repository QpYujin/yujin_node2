import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {CommunityService} from '../../../../../restApi/community.services';
import { ValidationService } from '../../../shared/formValidation/validation.service';

import * as moment from 'moment'

declare var swal: any;


@Component({
  selector: 'addCommunityExpenses',
  templateUrl: './addCommunityExpenses.html',
  styleUrls: ['./addCommunityExpenses.scss']
})


export class AddCommunityExpenses {

  public dt: Date = new Date();
  public minDate: Date = void 0;
  public events: any[];
  public tomorrow: Date;
  public afterTomorrow: Date;
  public dateDisabled: {date: Date, mode: string}[];
  public formats: string[] = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY',
    'shortDate'];
  public format: string = this.formats[0];
  public dateOptions: any = {
    formatYear: 'YY',
    startingDay: 1
  };
  private opened: boolean = false;
  tenantPaymentForm:any;
  newItem = {
    EndTime: null,
    StartTime: null
  };


  constructor(protected communityService: CommunityService,
              private formBuilder: FormBuilder) {

    this.tenantPaymentForm = this.formBuilder.group({
      // 'name': ['', Validators.required],
      'expensesType': ['', Validators.required],
      'month': ['', Validators.required],
      'day': ['', Validators.required],
      'year': ['', Validators.required],
      'amountPaid': ['', [Validators.required,Validators.minLength(1),Validators.maxLength(16),ValidationService.numbersOnly]],
      'vendorName': ['', [Validators.required,Validators.minLength(5),Validators.maxLength(16),ValidationService.nameOnly]],
      'community_Expenses_Description': ['',[Validators.required,Validators.minLength(5),Validators.maxLength(600)]]
    });



    (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
    (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
    (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
    (this.dateDisabled = []);
    this.events = [
      {date: this.tomorrow, status: 'full'},
      {date: this.afterTomorrow, status: 'partially'}
    ];
  }

  saveTenant() {
    if (this.tenantPaymentForm.dirty && this.tenantPaymentForm.valid) {
      //alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    }
    this.showAlert();
    console.log(this.tenantPaymentForm.value);
    this.communityService.addCommunityExpenses(this.tenantPaymentForm.value).then(() => {
      this.tenantPaymentForm.reset();

    })

  }


  // todo: implement custom class cases

  submitForm(form: any): void {
    console.log('Form Data: ');

    form.postBy = {
      userId: localStorage.getItem('user_id')

    };


    console.log(form);
    this.communityService.addCommunityExpenses(form).then(() => {
    this. showAlert();

    });


  }

  showAlert() {
    swal({
      title: 'Community Expenses successfully added',

      type: 'success',
      //showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      // confirmButtonText: 'Yes, delete it!'
    })
  }
}
