import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { CONFIG } from '../app/config';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class NewUserService {

 /*//temp ="localhost:3001";
  temp ="consensusnode.deploybytes.com";
  //temp ="ec2-34-207-180-227.compute-1.amazonaws.com:3001"*/

  private addNewUsers = 'http://'+CONFIG.REST_API_URL+'/api/addUSer';

  private getUsersUrl='http://'+CONFIG.REST_API_URL+'/api/getUsers/';


  constructor(private http: Http, private authHttp: AuthHttp) { }



  private handleError(error: any): Promise<any> {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  private extractData(res: Response) {

    let body = res.json();
    console.log(body)
    return body.data || {}
  }

  addUsers(data){
    console.log("from service" +JSON.stringify(data));
    return this.http
      .post(this.addNewUsers,data)
      .toPromise()
      .then(result => console.log(result))
      .catch(this.handleError);

  }

  getUsers() {

    return this.http
      .get(this.getUsersUrl+localStorage.getItem('userEmail'))
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }


}
