import { Component ,OnInit} from '@angular/core';
import {TenantService} from '../../../../../restApi/tetants.services';
import{NewUserService} from '../../../../../restApi/newUsers.services';

import {SearchPipe} from '../../../shared/custmized-pipe'

import './ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ckeditor-component',
  templateUrl: './ckeditor.html',
  styleUrls: ['./ckeditor.scss'],
})


export class Ckeditor implements OnInit{
  public ckeditorContent:string = '<p>Tenants List</p>';

  public tenants:any;
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };
  queryString='';filteredData:any
  name:string;
  data :any;e:any;
 // filteredData = this.data;

  constructor(private tenantService: TenantService,
              private newUserService:NewUserService) {
    //this.name = 'Angular2'

  }
  ngOnInit(): void {

    this.tenantService.getTenantsByCommunity()
      .then(data => {
        this.data = data;
        //this.data = this.tenants;
        console.log(this.data)
        this.filteredData = this.data;
        localStorage.setItem('noTenants', this.tenants.length);

      });


  }


  sendInvite(data){
  //this.e=email;
  var mail={
    email:data.email,
    communityId:localStorage.getItem('communityId')

  };

    this.tenantService.sendTenantInvite(mail)
      .then(data => {

      });

    var user={
      email:data.email,
      communityId:localStorage.getItem('communityId'),
      role:"tenant",
      invite:true,
      userId:null
    };

    this.newUserService.addUsers(user);
   var t ={
     tenantId:data._id
   }
    this.tenantService.editTenant(t)
    .then(data => {

    });

    window.location.reload();

  }
  search(val: any) {
    if (!val)

      this.filteredData = this.data;

    this.filteredData = this.data.filter(d => d.firstName.toLowerCase().indexOf(val) >= 0);
  }

}
