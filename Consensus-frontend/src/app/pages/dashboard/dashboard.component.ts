import {Component,OnInit, ElementRef} from '@angular/core';
import { AuthService } from '../../auth.service';
// import * as GoogleMapsLoader from 'google-maps';
import {CommunityService} from '../../../restApi/community.services';
import{NewUserService} from '../../../restApi/newUsers.services';
import {TenantService} from '../../../restApi/tetants.services'


@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})

export class Dashboard implements OnInit{
name:any;
userInfo:any;
community:any;tenants:any;
  addUser:any; i:any
  constructor(private authService: AuthService,
              private _elementRef:ElementRef,
  private newUserService:NewUserService, private communityService:CommunityService ,
              private tenantService:TenantService) {
  }


  ngAfterViewInit() {
  
  }
  ngOnInit(): void {
   console.log("in ngOnInit in the dashboard .ts" ,this.authService.authenticated());

    this.userInfo=localStorage.getItem('profile');

    this.addUser={
      userId:localStorage.getItem('user_id'),
      role:"admin"

    };



    this.communityService.getCommunitiesByUser().
    then(data => {
      this.community = data;
      console.log(this.community)
      localStorage.setItem('communityName',this.community.communityName);
      localStorage.setItem('communityId',this.community._id);
      localStorage.setItem('communityLocation', this.community.communitylocation);

    });

    this.tenantService.getTenantsByCommunity()
      .then(data => {
        this.tenants = data;

        localStorage.setItem('noTenants', this.tenants.length);



      });

    if(this.i == 1 ){
      window.location.reload();
      console.log("refresh the page")
      this.i++;
    }

 this.newUserService.addUsers(this.addUser);
  }
}
