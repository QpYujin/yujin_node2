import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgUploaderOptions } from 'ngx-uploader';
import {CommunityService} from '../../../../restApi/community.services';
import {TenantService} from '../../../../restApi/tetants.services'
import { AuthService } from '../../../auth.service';
import { ValidationService } from '../../shared/formValidation/validation.service';
import { FormControl }  from '@angular/forms'
import {  ElementRef, NgZone, ViewChild} from '@angular/core';
import { MapsAPILoader} from '@agm/core';
@Component({
  selector: 'add-Community',
  templateUrl: 'add-community.component.html',
  styleUrls: ['add-community.component.scss']
})
export class AddCommunityComponent implements OnInit {

communityByID:any;
user:any;userID:any;
name:any;
communityId:any;
  community:any;tenants:any;tenantPaymentForm:any;
  public latitude: number;
   public longitude: number;
   public zoom:number;
  public defaultPicture = '';communityForm:any;
  public profile:any = {
    picture: ''
  };
  public uploaderOptions:NgUploaderOptions = {
    url: '',
  };
  public fileUploaderOptions:NgUploaderOptions = {
    url: '',
  };
  constructor(
    private communityService:CommunityService,
    private tenantService:TenantService,
    private formBuilder: FormBuilder,
    private authService:AuthService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
    
   ) {

    this.latitude = 39.82;
    this.longitude = -98.57;
    this.zoom = 14;


    this.communityForm = this.formBuilder.group({
      // 'name': ['', Validators.required],
      'communityName': ['',[Validators.required,Validators.minLength(5),Validators.maxLength(32),ValidationService.nameOnly]],
      'FitnessCenter': [''],
      'Spa': [''], 'Playground':[''],'MediaRoom':[''],'Pool':[''],'PartyRoom':[''],
      'communityDescription': ['',[Validators.required,Validators.minLength(2)]],
      'searchControl': ['61 Main Street, Southborough, MA, United States',[Validators.required,Validators.minLength(2)]],
      'communitylocationlatitude': localStorage.setItem('communitylocationlatitude', this.latitude.toString()),
      'communitylocationlongitude':    localStorage.setItem('communitylocationlongitude', this.longitude.toString() ),
        'communitylocation':['',[Validators.required,ValidationService.nameOnly]],
      'postBy':{
        userId: localStorage.getItem('user_id')
      },
    });

  }

@ViewChild("search")
  public searchElementRef: ElementRef;

  ngOnInit(): void {

    this.user= localStorage.getItem('currentUser');
    console.log(this.user)
    this.userID= localStorage.getItem('id_token');
    
    this.latitude = 39.82;
    this.longitude = -98.57;
    this.zoom = 14;

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
          this.zoom = 14;

           localStorage.setItem('communitylocationlatitude', this.latitude.toString() );
           localStorage.setItem('communitylocationlongitude', this.longitude.toString() );
           console.log(place.geometry.location);
        });
      });
    });
  }
  saveCommunity() {
    if (this.communityForm.dirty && this.communityForm.valid) { }
    console.log(this.communityForm.value);
    this.communityService.addCommunity(this.communityForm.value).then(() => {
      this.communityService.getCommunitiesByUser().then(data => {
        this.community = data;
        console.log(this.community);
        localStorage.setItem('communityName', this.community.communityName);
        localStorage.setItem('communityId', this.community._id);
      });
      this.tenantService.getTenantsByCommunity()
        .then(data => {
          this.tenants = data;
           localStorage.setItem('noTenants', this.tenants.length);
           window.location.replace('/pages');
        });
    })
  }

  submitForm(form: any): void {
    console.log('Form Data: ');

    form.postBy = {
      userId: localStorage.getItem('user_id')

    };
    form.image=this.uploaderOptions.url;

    console.log(form);
    this.communityService.addCommunity(form).then(() => {

      this.communityService.getCommunitiesByUser().then(data => {
        this.community = data;
        console.log(this.community)
        localStorage.setItem('communityName', this.community.communityName);
        localStorage.setItem('communityId', this.community._id);

      });

      this.tenantService.getTenantsByCommunity()
        .then(data => {
          this.tenants = data;

          localStorage.setItem('noTenants', this.tenants.length);

          window.location.replace('/pages');


        });


    });
  }



}

