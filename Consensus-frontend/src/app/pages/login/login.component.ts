import {
    Component,
    OnInit,ViewChild ,
     ElementRef, NgModule, NgZone
}
from '@angular/core';

    

import { 
    FormBuilder,
      AbstractControl,
     FormControl, 
     FormGroup,
    Validators} 
from '@angular/forms';

import { AgmCoreModule, MapsAPILoader } from '@agm/core';


import {
    CommunityService
}

from '../../../restApi/community.services';
import {
    NewUserService
}
from '../../../restApi/newUsers.services'
import {
    TenantService
}
from '../../../restApi/tetants.services'
import {
    AuthService
}
from '../../auth.service';

@
Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
})
export class Login implements OnInit {

    public form: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;
    public submitted: boolean = false;

     public latitude: number;
    public longitude: number;
    public searchControl: FormControl;
    public zoom: number;
    
    @ViewChild("search")
    public searchElementRef: ElementRef;
    
   


    name: any;

    userInfo: any;
    community: any;
    tenants: any;
    try: any;
    setBoolean: boolean;
    users: any;
    tenantAccess;
    any;

    constructor(fb: FormBuilder,
        private newUserService: NewUserService, private communityService: CommunityService,
        private tenantService: TenantService,
        private authService: AuthService, private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone) {
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });

        //window.history.go(-1);  /*  Uncomment this line if you want you to browser back button to go back to  two pages back in the browser history */

        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];


    }

    public onSubmit(values: Object): void {
        this.submitted = true;
        if (this.form.valid) {
            // your code goes here
            // console.log(values);
        }
    }

    ngOnInit(): void {

     //set google maps defaults
    this.zoom = 16;
    this.latitude = 39.8282;
    this.longitude = -98.5795;
    
    //create search FormControl
    this.searchControl = new FormControl();
    
    //set current position
    this.setCurrentPosition();
    
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();

         localStorage.setItem('communitylng', place.geometry.location.lng().toString());
         localStorage.setItem('communitylat',place.geometry.location.lat().toString());
          //set latitude, longitude and zoom
          this.zoom = 16;
        });
      });
    });


        console.log("in ngOnInit in the dashboard .ts", this.authService.authenticated());
        this.tenantAccess = false;

             localStorage.setItem('addCommunityLocation','Y')

             console.log(' am I  admin?');
              this.userInfo = localStorage.getItem('profile');
                   
                this.communityService.getCommunitiesByUser().then(data => {
                            this.community = data;

                            console.log("get community" + this.community)

                            if (this.community.communityName == null && this.community.length == 0) {

                                this.setBoolean = false;
                               
                              
                            } else {

                                  this.setBoolean = true;
                                  localStorage.setItem('addCommunityLocation','N')
                            }

                            localStorage.setItem('communityName', this.community.communityName);
                            localStorage.setItem('communityId', this.community._id);


                            console.log("Tenant number are");
                            if(this.setBoolean){
                                console.log("I am admin")
                            this.tenantService.getTenantsByCommunity()
                                .then(data => {
                                    this.tenants = data;

                                    localStorage.setItem('noTenants', this.tenants.length);

                                });
                                }

                        });



            // is he a tenant?

                    if (!this.setBoolean) {
                    this.tenantService.getTenantsByEmail()
                     .then(data => {
                    this.tenants = data;
                    console.log('I am in tenant');
                        localStorage.setItem('communityId', this.tenants.community_id);
                        this.tenantAccess = true;

                          this.communityService.getCommunitiesById().then(data => {
                            this.community = data;
                           

                            localStorage.setItem('communityName', this.community.communityName);          
                        });
                


            });
            }

}

    private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

}