import {Component} from '@angular/core';

import {FeedService} from './feed.service';
import {TenantService} from '../../../../restApi/tetants.services';

@Component({
  selector: 'feed',
  templateUrl: './feed.html',
  styleUrls: ['./feed.scss']
})
export class Feed {
  tenants:any;tenantsPayment:any;
  public feed:Array<Object>;
  data:any;
  query: string = '';setBoolean:boolean;
  tenantsId=[];list=[];monthYear=[];
  tenantp=[];tenantName=[]; ExpensesTenantList=[];


  constructor(private _feedService:FeedService,
              private tenantService:TenantService) {

    this.tenantService.getTenantsByCommunity()
      .then(data => {
        this.tenants = data;

        this.tenantService.getTenantsPayment()
          .then(data => {

            this.tenantsPayment = data;
            //alert(this.tenants.length +this.tenantsPayment.length);
            if(this.tenants.length == 0){

              console.log("Tenant"+ this.tenantsPayment.length);
              this.setBoolean = false;
            }
            if(this.tenants.length != 0 ){

              for(var  i =0;i <this.tenantsPayment.length;i++){

                if( this.tenantsPayment[i].amountPaid == "" || this.tenantsPayment[i].amountPaid == null ){
                  //console.log("Payment"+ this.tenantsPayment.length);
                  this.setBoolean = false;

                }else{
                  this.setBoolean = true;

                  for(var  i =0;i <this.tenants.length;i++){

                    this.tenantsId.push( this.tenants[i]._id);
                    this.tenantName.push( this.tenants[i].firstName);

                  }

                  for(var  i =0;i <this.tenantsId.length;i++){

                    for(var  j =0; j<this.tenantsPayment.length;j++){

                      //  console.log("arary is  "+this.tenantsId[i] +" "+this.tenantsPayment[j].tenant_id);

                      if(this.tenantsId[i] == this.tenantsPayment[j].tenant_id){


                        if(this.tenantsPayment[j].amountPaid == null || this.tenantsPayment[j].amountPaid == ""){
                          this.tenantp.push("Unpaid");
                        }
                        else {
                          this.tenantp.push(this.tenantsPayment[j].amountPaid);
                        }

                        this.monthYear.push( this.tenantsPayment[j].lastUpdated);

                      }

                    }

                  }


                  for (var i=0; i<this.tenantsId.length; i++) {
                    this.ExpensesTenantList.push(
                      {

                        TenantName: this.tenantName[i],
                        // TenantId: this.tenantId[i],
                        amountPaid:this.tenantp[i],
                        monthYear:this.monthYear[i]


                      });
                  }

                  for(var i=0; i<this.ExpensesTenantList.length; i++){

                    if(this.ExpensesTenantList[i].amountPaid == "Unpaid"){

                      this.list= this.ExpensesTenantList.splice(i,1);

                    }
                  }




                }
              }

            }


          });
      });


  }

  ngOnInit() {
    this._loadFeed();
  }

  expandMessage (message){
    message.expanded = !message.expanded;
  }

  private _loadFeed() {
    this.feed = this._feedService.getData();
  }
}
