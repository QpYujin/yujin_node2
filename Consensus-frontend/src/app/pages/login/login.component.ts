import {
    Component,
    OnInit
}
from '@angular/core';
import {
    FormGroup,
    AbstractControl,
    FormBuilder,
    Validators
}
from '@angular/forms';
import {
    CommunityService
}
from '../../../restApi/community.services';
import {
    NewUserService
}
from '../../../restApi/newUsers.services'
import {
    TenantService
}
from '../../../restApi/tetants.services'
import {
    AuthService
}
from '../../auth.service';

@
Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
})
export class Login implements OnInit {

    public form: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;
    public submitted: boolean = false;

    name: any;

    userInfo: any;
    community: any;
    tenants: any;
    try: any;
    setBoolean: boolean;
    users: any;
    tenantAccess;
    any;

    constructor(fb: FormBuilder,
        private newUserService: NewUserService, private communityService: CommunityService,
        private tenantService: TenantService,
        private authService: AuthService) {
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });

        //window.history.go(-1);  /*  Uncomment this line if you want you to browser back button to go back to  two pages back in the browser history */

        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];


    }

    public onSubmit(values: Object): void {
        this.submitted = true;
        if (this.form.valid) {
            // your code goes here
            // console.log(values);
        }
    }

    ngOnInit(): void {
        console.log("in ngOnInit in the dashboard .ts", this.authService.authenticated());
        this.tenantAccess = false;


                        
                    console.log(' am I  admin?');
              this.userInfo = localStorage.getItem('profile');
                   
                this.communityService.getCommunitiesByUser().then(data => {
                            this.community = data;

                            console.log("get community" + this.community)

                            if (this.community.communityName == null && this.community.length == 0) {
                                this.setBoolean = false;
                            } else {
                                this.setBoolean = true;
                            }

                            localStorage.setItem('communityName', this.community.communityName);
                            localStorage.setItem('communityId', this.community._id);


                            console.log("Tenant number are");
                            if(this.setBoolean){
                                console.log("I am admin")
                            this.tenantService.getTenantsByCommunity()
                                .then(data => {
                                    this.tenants = data;

                                    localStorage.setItem('noTenants', this.tenants.length);

                                });
                                }

                        });



            // is he a tenant?

                    if (!this.setBoolean) {
                    this.tenantService.getTenantsByEmail()
                     .then(data => {
                    this.tenants = data;
                    console.log('I am in tenant');
                        localStorage.setItem('communityId', this.tenants.community_id);
                        this.tenantAccess = true;

                          this.communityService.getCommunitiesById().then(data => {
                            this.community = data;
                           

                            localStorage.setItem('communityName', this.community.communityName);          
                        });
                


            });
            }

}
}