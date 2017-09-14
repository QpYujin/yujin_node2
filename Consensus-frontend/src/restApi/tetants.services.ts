import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { CONFIG } from '../app/config';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class TenantService {



  private addTenantUrl ='http://'+CONFIG.REST_API_URL+'/api/addTenant/';
  private getTenantsUrl = 'http://'+CONFIG.REST_API_URL+'/api/tenant/';
  private getTenantsEmailUrl = 'http://'+CONFIG.REST_API_URL+'/api/getTenants/';
  //private id ='595cfcf5f9e2e537a48c7fe4';

  private editTenantUrl ='http://'+CONFIG.REST_API_URL+'/api/editTenant'

  private addTenantPaymentUrl= 'http://'+CONFIG.REST_API_URL+'/api/addTenantExpense/';
  private getTenantPaymentUrl='http://'+CONFIG.REST_API_URL+'/api/getTenantExpense/';

   private getExpenseByTenantPaymentUrl='http://'+CONFIG.REST_API_URL+'/api/getExpenseByTenant/';
  private get10TenantPaymentUrl='http://'+CONFIG.REST_API_URL+'/api/getTenantExpenseOnly10/';


  private sendTenantInviteUrl= 'http://'+CONFIG.REST_API_URL+'/api/sendEmailtoTenant';

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

  //  Tenant function

  addTenant(data){

    return this.http
      .post(this.addTenantUrl+localStorage.getItem('communityId'),data)
      .toPromise()
      .then(result => console.log(result))
      .catch(this.handleError);
  }

  getTenantsByCommunity() {
    console.log(this.getTenantsUrl+localStorage.getItem('communityId'));
    return this.http
      .get(this.getTenantsUrl+localStorage.getItem('communityId'))
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }







  getTenantsByEmail() {
    console.log(this.getTenantsEmailUrl+localStorage.getItem('userEmail'));
    return this.http
      .get(this.getTenantsEmailUrl+localStorage.getItem('userEmail'))
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  editTenant(data){
    console.log("edit Tenant" +JSON.stringify(data));
    return this.http
      .put(this.editTenantUrl,data)
      .toPromise()
      .then(result => console.log(result))
      .catch(this.handleError);
  }


  addTenantPayment(data){
    return this.http
      .post(this.addTenantPaymentUrl+localStorage.getItem('communityId'),data)
      .toPromise()
      .then(result => console.log(result))
      .catch(this.handleError);
  }

  getTenantsPayment() {
    console.log(this.getTenantPaymentUrl+localStorage.getItem('communityId'));
    return this.http
      .get(this.getTenantPaymentUrl+localStorage.getItem('communityId'))
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }




 getExpenseByTenantsPayment(tenantId,firstName ) {
    console.log(this.getExpenseByTenantPaymentUrl+localStorage.getItem('communityId')+'/'+tenantId);
    return this.http
      .get(this.getExpenseByTenantPaymentUrl+localStorage.getItem('communityId')+'/'+tenantId)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  sendTenantInvite(data){
    data.tenantAccess==true
    return this.http
      .post(this.sendTenantInviteUrl,data)
      .toPromise()
      .then(result => console.log(result))
      .catch(this.handleError);
  }


  get10TenantsPayment() {
    // console.log(this.getTenantPaymentUrl+localStorage.getItem('communityId'));
    return this.http
      .get(this.get10TenantPaymentUrl+localStorage.getItem('communityId'))
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

}
