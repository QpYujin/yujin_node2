import {
    Component
} from '@angular/core';

import {
    FeedService
} from './feed.service';
import {
    TenantService
} from '../../../../restApi/tetants.services';

@Component({
    selector: 'feed',
    templateUrl: './feed.html',
    styleUrls: ['./feed.scss']
})
export class Feed {
    tenants: any;
    tenantsPayment: any;
    public feed: Array < Object > ;
    data: any;
    query: string = '';
    setBoolean: boolean;
    tenantsId = [];
    list = [];
    monthYear = [];
    tenantp = [];date=[];
    tenantName = [];
    ExpensesTenantList = [];
constructor(private _feedService: FeedService,
       private tenantService: TenantService) {

      this.tenantService.getTenantsPayment().then(
        data => {

          this.tenantsPayment = data;
          console.log("This is selected month"+JSON.stringify(this.tenantsPayment));

          if(this.tenantsPayment.length == 0){

            console.log("Tenant"+ this.tenantsPayment.length);
            this.setBoolean = false;
          }
          if(this.tenantsPayment.length != 0 ) {
            this.setBoolean = true;

      let currentMonth= this.isCurrentYear();

            for (var i = 0; i < this.tenantsPayment.length; i++) {

              if(currentMonth == this.tenantsPayment[i].myDate.date.month) {
                this.ExpensesTenantList.push(
                  {
                    TenantName: this.tenantsPayment[i].tenantName,

                    amountPaid: this.tenantsPayment[i].amountPaid,


                    date: this.tenantsPayment[i].myDate.jsdate

                  });
              }
            }
          }

        });
    }

    ngOnInit() {

    }

    expandMessage(message) {
        message.expanded = !message.expanded;
    }

  isCurrentYear(){
    let date = new Date();
    let iMonth = date.getMonth()+1;
    console.log(iMonth)

    return iMonth;
  }

}