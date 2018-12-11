import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppService } from './app.service';
import { Form, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PersonalInfoShowComponent } from './personal-info-show/personal-info-show.component';
import { from } from 'rxjs';
import { PersonalInfoAlterComponent } from './personal-info-alter/personal-info-alter.component';
// import {LocalStorage} from "../local.storage";
import { HomepageComponent } from './homepage/homepage.component';
import { NofoundComponent } from './nofound/nofound.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    PersonalInfoShowComponent,
    PersonalInfoAlterComponent,
    HomepageComponent,
    NofoundComponent,
    // LocalStorage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    AppService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
