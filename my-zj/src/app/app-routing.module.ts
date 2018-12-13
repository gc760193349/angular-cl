import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// @ts-ignore
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PersonalInfoShowComponent } from './personal-info-show/personal-info-show.component';
import { PersonalInfoAlterComponent } from './personal-info-alter/personal-info-alter.component';
import { HomepageComponent } from "./homepage/homepage.component";
import { NofoundComponent } from './nofound/nofound.component';
import { CheckGuard, LoginGuard } from "./guard/login.guard";
import { UnsaveGuard } from './guard/unsave.guard';
import {TrainComponent} from "./train/train.component";
import {TrainOneComponent} from "./train/train-one/train-one.component";
import {TrainTwoComponent} from "./train/train-two/train-two.component";
import {TrainThreeComponent} from "./train/train-three/train-three.component";

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'personalInfo', component: PersonalInfoComponent,canActivate: [LoginGuard]},
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'personalInfoShow', component: PersonalInfoShowComponent, canActivate: [LoginGuard]},
  {
    path: 'personalInfoAlter',
    component: PersonalInfoAlterComponent,
    canActivate: [LoginGuard],
    canDeactivate: [UnsaveGuard]
  },
  {path:'train',component:TrainComponent,canActivate: [LoginGuard],children:[
      {path:'train-one',component:TrainOneComponent},
      {path:'train-two',component:TrainTwoComponent},
      {path:'train-three',component:TrainThreeComponent},
    ]},

  {path: 'noFound', component: NofoundComponent},
  {path: '**', component: NofoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, CheckGuard, UnsaveGuard]
})
export class AppRoutingModule {
}
