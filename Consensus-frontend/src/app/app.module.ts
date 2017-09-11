import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule ,FormGroupDirective} from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { DatePipe } from '@angular/common';


import { BrowserXhr,HttpModule, Http, RequestOptions} from '@angular/http';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { routing,routedComponents } from './app.routing';

import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';


import {NewUserService} from '../restApi/newUsers.services'
import {CommunityService} from '../restApi/community.services'
import {SearchPipe} from './pages/shared/custmized-pipe'

import { ControlMessagesComponent } from './pages/shared/formValidation/control-messages.component';
import { ValidationService } from './pages/shared/formValidation/validation.service';




export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    noClientCheck: true
  }), http, options)
}

const APP_PROVIDERS = [
  AppState,
  GlobalState
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App,
    routedComponents,
    SearchPipe,
    //ControlMessagesComponent,

  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    //ControlMessagesComponent,
    FlashMessagesModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    PagesModule,
    routing,




  ],


  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS,
    AuthService,
    AuthGuard,
   {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
    NewUserService,
    CommunityService,
    DatePipe,
    ValidationService,
    FormGroupDirective


  ]
})

export class AppModule {

  constructor(public appState: AppState) {
  }
}
