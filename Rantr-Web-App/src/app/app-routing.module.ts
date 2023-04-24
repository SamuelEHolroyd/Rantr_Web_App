import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsLayoutComponent } from './layouts/account-details-layout/account-details-layout.component';
import { CreateAccountLayoutComponent } from './layouts/create-account-layout/create-account-layout.component';
import { CreateThreadsLayoutComponent } from './layouts/create-threads-layout/create-threads-layout.component';
import { FollowingThreadsLayoutComponent } from './layouts/following-threads-layout/following-threads-layout.component';
import { HomepageLayoutComponent } from './layouts/homepage-layout/homepage-layout.component';
import { MyThreadsLayoutComponent } from './layouts/my-threads-layout/my-threads-layout.component';
import { RecommendedThreadsLayoutComponent } from './layouts/recommended-threads-layout/recommended-threads-layout.component';
import { SettingLayoutComponent } from './layouts/setting-layout/setting-layout.component';
import { SigninLayoutComponent } from './layouts/signin-layout/signin-layout.component';
import { ChangePasswordLayoutComponent } from './layouts/change-password-layout/change-password-layout.component';
import { ChangeUsernameLayoutComponent } from './layouts/change-username-layout/change-username-layout.component';

const routes: Routes = [
  {path:'profile', component: HomepageLayoutComponent},
  {path:'create-account', component: CreateAccountLayoutComponent},
  {path:'following-threads', component: FollowingThreadsLayoutComponent},
  {path:'recommended-threads', component: RecommendedThreadsLayoutComponent},
  {path:'my-threads', component: MyThreadsLayoutComponent},
  {path:'account-details', component: AccountDetailsLayoutComponent},
  {path:'settings', component: SettingLayoutComponent},
  {path:'create-thread', component: CreateThreadsLayoutComponent},
  {path:'', component: SigninLayoutComponent},
  {path:'change-password', component: ChangePasswordLayoutComponent},
  {path:'change-username', component: ChangeUsernameLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
