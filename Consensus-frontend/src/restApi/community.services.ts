import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { CONFIG } from '../app/config';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



@Injectable()
export class CommunityService {


  private addCommunityUrl = 'http://'+CONFIG.REST_API_URL+'/api/addCommunity';
  private viewCommunitiesUrl = 'http://'+CONFIG.REST_API_URL+'/api/viewCommunities/';
  private addNewUsers = 'http://'+CONFIG.REST_API_URL+'/api/addUSer';

  private addCommunityExpensesUrl = 'http://'+CONFIG.REST_API_URL+'/api/addCommunityExpense/';
  private getCommunityExpenseUrl = 'http://'+CONFIG.REST_API_URL+'/api/getCommunityExpense/';

  private addCommunityReminderUrl = 'http://'+CONFIG.REST_API_URL+'/api/addCommunityReminder/';
  private getCommunityReminderUrl = 'http://'+CONFIG.REST_API_URL+'/api/getCommunityReminder/';

  private addCommunityEventsUrl = 'http://'+CONFIG.REST_API_URL+'/api/addCommunityEvents/';
  private getCommunityEventsUrl = 'http://'+CONFIG.REST_API_URL+'/api/getCommunityEvents/';


  constructor(private http: Http, private authHttp: AuthHttp) { }

  getCommunitiesByUser() {
    console.log(this.viewCommunitiesUrl+localStorage.getItem('user_id'));
    return this.http
      .get(this.viewCommunitiesUrl+localStorage.getItem('user_id'))
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }


  getCommunitiesById() {
    console.log(this.viewCommunitiesUrl+localStorage.getItem('communityId'));
    return this.http
      .get(this.viewCommunitiesUrl+localStorage.getItem('communityId'))
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  addCommunity(data){
    console.log(this.addCommunityUrl);
    return this.http
      .post(this.addCommunityUrl,data)
      .toPromise()
      .then(result => console.log(result))
      .catch(this.handleError);

  }

  addCommunityExpenses(data){

    return this.http
      .post(this.addCommunityExpensesUrl+localStorage.getItem('communityId'),data)
      .toPromise()
      .then(result => console.log(result))
      .catch(this.handleError);

  }

  getCommunitiesExpenses() {

    return this.http
      .get(this.getCommunityExpenseUrl+localStorage.getItem('communityId'))
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  addCommunityReminder(data){

    return this.http
      .post(this.addCommunityReminderUrl+localStorage.getItem('communityId'),data)
      .toPromise()
      .then(result => console.log(result))
      .catch(this.handleError);

  }

  getCommunitiesReminder() {

    return this.http
      .get(this.getCommunityReminderUrl+localStorage.getItem('communityId'))
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  addCommunityEvents(data){

    return this.http
      .post(this.addCommunityEventsUrl+localStorage.getItem('communityId'),data)
      .toPromise()
      .then(result => console.log(result))
      .catch(this.handleError);

  }

  getCommunitiesEvents() {

    return this.http
      .get(this.getCommunityEventsUrl+localStorage.getItem('communityId'))
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  addUsers(data){
    console.log("from service" +data);
    return this.http
      .post(this.addNewUsers,data)
      .toPromise()
      .then(result => console.log(result))
      .catch(this.handleError);

  }


  private handleError(error: any): Promise<any> {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  private extractData(res: Response) {

    let body = res.json();
    console.log(body)
    return body.data || {}
  }




}
