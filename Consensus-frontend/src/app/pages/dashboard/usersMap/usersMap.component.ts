import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { UsersMapConst } from '../usersMap/usersMap.const';
import {MapsAPILoader} from "@agm/core";
import {CommunityService} from '../../../../restApi/community.services';
import {Location} from '@angular/common';
import {} from '@types/googlemaps';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { FormsModule, ReactiveFormsModule}  from '@angular/forms'


declare var google: any;

@Component({
  selector: 'users-map',
  templateUrl: './usersMap.html',
  styleUrls: ['./usersMap.scss']
})
export class UsersMap implements OnInit{
  title = 'app';
  lat: number ;
  lng: number ;
  public latitude: number;
  public longitude: number;
 
  public zoom: number;
  

  mGoogleMapStyle : any;
  mMapsAPILoader : any;
  mMapData : any;
  mLocation : any;
  mCommunityService : any;
  searchlocationlng : any;
  searchlocationlat: any;
  constructor(public router : Router, public mapsAPILoader : MapsAPILoader, public communityService : CommunityService
             )
  {
   this.lat=42.24;
   this.lng=-71.6895578;

  this.mMapsAPILoader = mapsAPILoader;

 



  this.mCommunityService = communityService;

      this.mCommunityService.getCommunitiesByUser().
      then(community => {

      this.searchlocationlat = community.searchlocationlat;
      this.searchlocationlng = community.searchlocationlng;
      console.log('value of location lat before:'+ this.searchlocationlat );
       this.mapsAPILoader.load().then(() => {
           
                
       this.lat =   parseFloat(this.searchlocationlat);
       this.lng =   parseFloat(this.searchlocationlng)  ;
       this.zoom = 21;

         });
        
       });



    
    
    
  }
  ngOnInit(): void {
    console.log("in ngOnInit");
     }


private setCurrentPosition() {

  localStorage.setItem('communitylat', '42.3251803');
   localStorage.setItem('communitylng','-71.6895578') ;

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
         //localStorage.setItem('communitylng', position.coords.longitude.toString());
         //localStorage.setItem('communitylat',position.coords.latitude.toString());
        this.zoom = 21;


      });
    }
  }
}
