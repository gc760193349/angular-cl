import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PersonalInfoShowComponent } from './personal-info-show/personal-info-show.component';
import { from } from 'rxjs';
import { PersonalInfoAlterComponent } from './personal-info-alter/personal-info-alter.component';
// import {LocalStorage} from "../local.storage";
import { HomepageComponent } from './homepage/homepage.component';
import { NofoundComponent } from './nofound/nofound.component';
import { TrainComponent } from './train/train.component';
import { TrainOneComponent } from './train/train-one/train-one.component';
import { TrainTwoComponent } from './train/train-two/train-two.component';
import { PipeOnePipe } from './train/train-one/pipe-one.pipe';
import { TrainThreeComponent } from './train/train-three/train-three.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    PersonalInfoShowComponent,
    PersonalInfoAlterComponent,
    HomepageComponent,
    NofoundComponent,
    TrainComponent,
    TrainOneComponent,
    TrainTwoComponent,
    PipeOnePipe,
    TrainThreeComponent,
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
