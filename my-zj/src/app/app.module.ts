import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { OneChildComponent } from './one-child/one-child.component';
import { TwoChildComponent } from './two-child/two-child.component';
import { from } from 'rxjs';
import { ThreeChildComponent } from './three-child/three-child.component';
import {LocalStorage} from '../local.storage';




@NgModule({
  declarations: [
    AppComponent,
    OneChildComponent,
    TwoChildComponent,
    ThreeChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AppService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
