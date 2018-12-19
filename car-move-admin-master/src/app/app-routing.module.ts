import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

import {LoginComponent} from './share/components/login/login.component';
import {MainComponent} from './share/components/main/main.component';
import {LinkComponent} from './share/components/link/link.component';
import {ManagementComponent} from './share/components/management/management.component';
import {HomepageComponent} from './share/components/main/homepage/homepage.component';
import {GenerateLinksComponent} from './share/components/link/generate-links/generate-links.component';
import {GenerateLinksHistoryComponent} from './share/components/link/generate-links-history/generate-links-history.component';
import {LinkManagementComponent} from './share/components/management/link-management/link-management.component';
import {UsersManagementComponent} from './share/components/management/users-management/users-management.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: '', component: AppComponent, children: [
      {
        path: 'main',
        component: MainComponent, children: [
          {path: '', redirectTo: 'homepage', pathMatch: 'full'},
          {path: 'homepage', component: HomepageComponent}
        ]
      },
      {
        path: 'link',
        component: LinkComponent, children: [
          {path: 'generate-links', component: GenerateLinksComponent},
          {path: 'generate-links-history', component: GenerateLinksHistoryComponent}
        ]
      },
      {
        path: 'management',
        component: ManagementComponent, children: [
          {path: 'linkManagement', component: LinkManagementComponent},
          {path: 'usersManagement', component: UsersManagementComponent}
        ]
      },
      {path: '**', redirectTo: '/main/home', pathMatch: 'full'},
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
