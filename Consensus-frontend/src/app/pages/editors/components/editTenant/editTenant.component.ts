import { Component ,OnInit} from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import {TenantService} from '../../../../../restApi/tetants.services'


//import './ckeditor1.loader';
//import 'ckeditor';

@Component({
  selector: 'editTenant-component',
  templateUrl: './editTenant.html',
  styleUrls: ['./editTenant.scss']
})

export class EditTenant implements OnInit{
  //public ckeditorContent:string = '<p>Tenants List</p>';

  public tenants:any;
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor(
    private tenantService: TenantService,
    private _flashMessagesService: FlashMessagesService
  ) {

    this.tenants=[
      { author:"hetal",
        surname :"Ramani",
        class:"btn btn-default",
      invite:"Invited"},

      { author:"Neha",
        surname :"Khairnae",
        class:"btn btn-warning",
        invite:"Invite"},
      {
        author: 'Kostya',
        surname: 'Danovsky',
        class:"btn btn-default",
        invite:"Invited"
      },
      {
        author: 'Kostya',
        surname: 'Danovsky',
        class:"btn btn-warning",
        invite:"Invite"
      },
      {
        author: 'Kostya',
        surname: 'Danovsky',
        class:"btn btn-default",
        invite:"Invited"
      },
      {
        author: 'Kostya',
        surname: 'Danovsky',
        class:"btn btn-warning",
        invite:"Invite"
      },
      {
        author: 'Kostya',
        surname: 'Danovsky',
        class:"btn btn-default",
        invite:"Invited"
      },




    ]
  }

  ngOnInit(): void {
    console.log("in ngOnInit in 1");
   // this._flashMessagesService.show('We are in about component!', 'alert-success');

  }

  submitForm(form: any): void{
    console.log('Form Data: ');


    console.log(form);
    this.tenantService.editTenant(form).then(() => {

    })

  }

}
