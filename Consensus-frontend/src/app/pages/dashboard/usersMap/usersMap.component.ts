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
declare var google: any;

@Component({
  selector: 'users-map',
  templateUrl: './usersMap.html',
  styleUrls: ['./usersMap.scss']
})
export class UsersMap implements OnInit{
  title = 'app';
  lat: number = 42.2834603;
  lng: number = -71.72665899999998;
  zoom;any;
  //
  mGoogleMapStyle : any;
  mMapsAPILoader : any;
  mMapData : any;
  mLocation : any;
  mCommunityService : any;

  constructor(public router : Router, public mapsAPILoader : MapsAPILoader, public communityService : CommunityService,
             ){
    // Map Style Changes
   // this.mGoogleMapStyle        = UsersMapConst.satelite;
    this.zoom =21;

    this.setCurrentPosition();
    this.mMapsAPILoader = mapsAPILoader;
    this.mCommunityService = communityService;
    this.mCommunityService.getCommunitiesByUser().
    then(community => {
      this.mLocation = community.communitylocation;
      this.mMapsAPILoader.load().then(() => {
          console.log('google script loaded');
          this.getAddressFromZipCode();
      });

    });
    // this.mMapData               = UsersMapConst.map_sample_data;
  }
  ngOnInit(): void {
    console.log("in ngOnInit");
  }

  public getThemeColor(intitaive){
    if (intitaive == "Low Carbon Campus"){
      return "#8BB75E"
    }
    else if (intitaive == "Resilient Ecosystems"){
      return "#7655A7"
    }
    else if (intitaive == "Material Lifecycles"){
      return "#AA374C"
    }
    else if (intitaive == "Healthy People"){
      return "#EDA85F"
    }
    else if (intitaive == "Thriving Networks"){
      return "#70B4E2"
    }
  }

  getAddressFromZipCode()
  {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address' : this.mLocation}, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        let lat = results[0].geometry.location.lat();
        let lng = results[0].geometry.location.lng();

        this.lat = lat;
        this.lng = lng;
      }
    });
  }

  private setCurrentPosition() {

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        this.zoom = 21;


      });
    }
  }
}
