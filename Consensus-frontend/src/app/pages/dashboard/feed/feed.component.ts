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
    tenantp = [];
    tenantName = [];
    ExpensesTenantList = [];


    constructor(private _feedService: FeedService,
        private tenantService: TenantService) {

        this.tenantService.getTenantsByCommunity()
            .then(data => {

                this.tenants = data;
                var tenantLoop;

                for (tenantLoop = 0; tenantLoop < this.tenants.length ; tenantLoop++) {

                this.tenantName.push({tenantId: this.tenants[tenantLoop]._id, 
                                    firstName: this.tenants[tenantLoop].firstName});


                }
                

            });


setTimeout(() => 
{




             for (var i = 0; i < this.tenantName.length ; i++) {

                var data = this.tenantName[i];

                   var tenantId = data.tenantId ;
                   var  firstName =  data.firstName ;
                  
                
                

                      this.tenantService.getExpenseByTenantsPayment(tenantId,firstName)
                        .then(data => {


                            this.tenantsPayment = data;

               

                            for (var i = 0; i < this.tenantsPayment.length ; i++) {

                             

                                if (this.tenantsPayment[i].amountPaid == "" || this.tenantsPayment[i].amountPaid == null) {

                                    this.setBoolean = false;

                                } else {

                                   

                                    this.setBoolean = true;

                                    this.ExpensesTenantList.push({
                                   
                                        amountPaid: this.tenantsPayment[i].amountPaid,
                                        monthYear: this.tenantsPayment[i].monthYear

                                    });




                                }



                            }
                         



                             });
                       
                      }

},
2000);




    }

    ngOnInit() {

    }

    expandMessage(message) {
        message.expanded = !message.expanded;
    }


}