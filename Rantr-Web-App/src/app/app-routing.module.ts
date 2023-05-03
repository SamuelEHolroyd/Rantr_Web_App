import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsLayoutComponent } from './layouts/account-details-layout/account-details-layout.component';
import { CreateAccountLayoutComponent } from './layouts/create-account-layout/create-account-layout.component';
import { CreateThreadsLayoutComponent } from './layouts/create-threads-layout/create-threads-layout.component';
import { HomepageLayoutComponent } from './layouts/homepage-layout/homepage-layout.component';
import { MyThreadsLayoutComponent } from './layouts/my-threads-layout/my-threads-layout.component';
import { RecommendedThreadsLayoutComponent } from './layouts/recommended-threads-layout/recommended-threads-layout.component';
import { SigninLayoutComponent } from './layouts/signin-layout/signin-layout.component';
import { SettingLayoutComponent } from './layouts/settings-sidebar/setting-layout.component';
import { SecurityAndAccountAccessComponent } from './layouts/settings-sidebar/security-and-account-access/security-and-account-access.component';
import { AboutComponent } from './layouts/settings-sidebar/about/about.component';
import { PrivacyAndSafetyComponent } from './layouts/settings-sidebar/privacy-and-safety/privacy-and-safety.component';

const routes: Routes = [
  {path:'create-account', component: CreateAccountLayoutComponent},
  {path:'recommended-threads', component: RecommendedThreadsLayoutComponent},
  {path:'my-threads', component: MyThreadsLayoutComponent},
  {path:'account-details', component: AccountDetailsLayoutComponent},
  {path:'create-thread', component: CreateThreadsLayoutComponent},
  {path:'', component: SigninLayoutComponent},
  {path:'SecurityandAccountAcesss', component: SecurityAndAccountAccessComponent},
  {path:'About', component: AboutComponent},
  {path:'PrivacyandSafety',component:PrivacyAndSafetyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
