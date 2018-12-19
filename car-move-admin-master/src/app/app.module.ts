import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, ErrorHandler, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {ShareModule} from './share/share.module';
import {AppRoutingModule} from './app-routing.module';
import {EntryComponent} from './entry/entry.component';
import {initializer} from './initializer';
import * as Raven from 'raven-js';
import {environment} from '../environments/environment';
import { MainComponent } from './share/components/main/main.component';
import { LinkComponent } from './share/components/link/link.component';
import { ManagementComponent } from './share/components/management/management.component';
import { LoginComponent } from './share/components/login/login.component';
import { HomepageComponent } from './share/components/main/homepage/homepage.component';
import { GenerateLinksComponent } from './share/components/link/generate-links/generate-links.component';
import { GenerateLinksHistoryComponent } from './share/components/link/generate-links-history/generate-links-history.component';
import { WashCarComponent } from './share/components/wash-car/wash-car.component';
import { LinkManagementComponent } from './share/components/management/link-management/link-management.component';
import { UsersManagementComponent } from './share/components/management/users-management/users-management.component';

registerLocaleData(zh);

export class RavenErrorHandler implements ErrorHandler {

  constructor() {
    switch (environment.version) {
      case 'd':
        Raven
          .config('https://d00c86da2df54a1a98c88e90797ea415@guard.uucin.com/6')
          .install();
        break;
      case 'r':
        Raven
          .config('https://3e41af5da47246ee8157c5a98defdee9@guard.uucin.com/7')
          .install();
        break;
    }
  }

  handleError(err: any): void {
    if (environment.version === 'd' ||
      environment.version === 'r') {
      // 部署到服务器上的版本才生成日志
      Raven.captureException(err);
    }
  }
}

@NgModule({
  declarations: [
    MainComponent,
    LinkComponent,
    ManagementComponent,
    AppComponent,
    LoginComponent,
    HomepageComponent,
    GenerateLinksComponent,
    GenerateLinksHistoryComponent,
    WashCarComponent,
    LinkManagementComponent,
    UsersManagementComponent,
    EntryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    AppRoutingModule,
    ShareModule,
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN},
    {provide: APP_INITIALIZER, useFactory: initializer.boot, multi: true},
    {provide: ErrorHandler, useClass: RavenErrorHandler}],
  bootstrap: [EntryComponent],
})

export class AppModule {
}


/*
*
* {
      provide: ErrorHandler, useFactory: () => {
        return new RavenErrorHandler('d');
      }
    }
* */
