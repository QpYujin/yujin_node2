import {Component} from '@angular/core';
import {CommunityService} from '../../../../restApi/community.services';


@Component({
  selector: 'popular-app',
  templateUrl: './popularApp.html',
  styleUrls: ['./popularApp.scss']
})
export class PopularApp {

  tenant:any;community:any;communityData:any;amenities=[];
  ngOnInit() {
    this.tenant=localStorage.getItem('noTenants');
    this.community=localStorage.getItem('communityName');


    this.communityService.getCommunitiesByUser().
    then(data => {
      this.communityData = data;
      console.log(this.communityData);



     /* for(var  i =this.communityData.amenities.length-1;i <1;i++){
        if(this.communityData.amenities[i] == true)
        this.amenities.push(this.communityData.amenities);
        console.log(this.amenities);
      }*/
    });
  }


  constructor( private communityService:CommunityService ,

              ) {
  }


}
