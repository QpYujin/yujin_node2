import { Injectable , Inject}      from '@angular/core';
import { Router } from '@angular/router';
import { tokenNotExpired ,JwtHelper} from 'angular2-jwt';

import{ NewUserService} from '../restApi/newUsers.services'
import {CommunityService} from '../restApi/community.services';

// Avoid name not found warnings
declare var Auth0Lock: any;


//let Auth0Lock = require('auth0-lock').default;
var options = {
  primaryColor: '#00aaec' // this is an undocumented variable

};



@Injectable()
export class AuthService {
  // Configure Auth0
  lock = new Auth0Lock('hluGymViD3Dm1GZ3qm8Om7xwKgJkCwWu', 'qpairio.auth0.com', {
    auth: {
      allowedConnections: ['google'],
      redirect: false,
      //redirectUrl: 'http://consensus.deploybytes.com/callback',
       redirectUrl: 'http://localhost:4200/callback',

      responseType: 'token id_token',
      params: {
        scope: 'openid profile email' // Learn about scopes: https://auth0.com/docs/scopes
      },


    },
    theme: {
      primaryColor: '#00aaec',
      logo: 'https://vignette1.wikia.nocookie.net/dragoncity/images/4/45/Community_icon-300x297.png/revision/latest?cb=20140110162414'
    },
    languageDictionary: {
      title: "Consensus"
    },
    allowForgotPassword:false,


  });

  constructor( private router: Router,
             private  newUserService:NewUserService,
             protected  communityService:CommunityService
) {
    this.lock.on("authenticated", (authResult:any) => {

      this.lock.getProfile(authResult.idToken, function(error:any, profile:any){
        if(error){
          console.log(error);
          throw new Error(error);
        }
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('user_id', JSON.stringify(profile.identities[0].user_id).replace(/\"/g, ""));
        localStorage.setItem('currentUser', JSON.stringify(profile.name));

        //this.newUserService.addUsers(localStorage.getItem('profile'));
        localStorage.setItem('userEmail',JSON.stringify(profile.email).replace(/\"/g, ""));

        console.log(JSON.stringify(profile));

         /* this.communityService.getCommunitiesByUser().
         then(data => {
        var  communityId = data;
         console.log(" ***** communityID in the dashboard .ts" +communityId );
         });*/
        window.location.replace('/direct');

        // this.router.navigate(['/pages']);
        console.log(localStorage.getItem('currentUser'));


      });


    });

  }


  public login() {
    // Call the show method to display the widget.
    this.lock.show(/*{
     callbackUrl: 'http://localhost:4200/pages'
      }*/

    );

  };

  public  authenticated() {
   /* if(localStorage.getItem('profile')=== null){

      return false;
    }
    return true;*/
    return tokenNotExpired('id_token');
  };


  public handleAuth() {
var communityId :any;

    this.lock.on("authenticated", (authResult:any) => {

        this.lock.getProfile(authResult.idToken, function(error:any, profile:any){
          if(error){
            console.log(error);
            throw new Error(error);
          }
          localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('user_id', JSON.stringify(profile.identities[0].user_id).replace(/\"/g, ""));
       //this.newUserService.addUsers(localStorage.getItem('profile'));
        //console.log(JSON.stringify(profile));

        /*  this.communityService.getCommunitiesByUser().
          then(data => {
            communityId = data;
            console.log(" ***** communityID in the dashboard .ts" +communityId );

            localStorage.setItem('Id','1');
          });*/
          window.location.replace('/direct');

          // this.router.navigate(['/pages']);
          console.log(localStorage.getItem('user_id'));


      });


    });


    //this.router.navigate(['/pages']);
  }





  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  localStorage.removeItem('user_id');
    localStorage.removeItem('communityId');
    localStorage.removeItem('communityName');
    localStorage.removeItem('noTenants');

    window.location.replace('/');
   // this.router.navigate(['/home']);

  };
}
