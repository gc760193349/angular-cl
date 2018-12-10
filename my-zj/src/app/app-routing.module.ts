import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneChildComponent } from './one-child/one-child.component';
import { TwoChildComponent } from './two-child/two-child.component';
import { ThreeChildComponent } from './three-child/three-child.component';

const routes: Routes = [
  {path: 'onechild' , component: OneChildComponent},
  {path: '', redirectTo: '/onechild' , pathMatch: 'full'},
  {path: 'twochild' , component: TwoChildComponent},
  {path: 'threechild', component: ThreeChildComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
