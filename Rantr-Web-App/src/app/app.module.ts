import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileNavbarComponent } from './components/profile-navbar/profile-navbar.component';
import { ThreadlistNavbarComponent } from './components/threadlist-navbar/threadlist-navbar.component';
import { SigninLayoutComponent } from './layouts/signin-layout/signin-layout.component';
import { HomepageLayoutComponent } from './layouts/homepage-layout/homepage-layout.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { CreateAccountFormComponent } from './components/create-account-form/create-account-form.component';
import { CreateAccountLayoutComponent } from './layouts/create-account-layout/create-account-layout.component';
import { FollowingThreadsLayoutComponent } from './layouts/following-threads-layout/following-threads-layout.component';
import { RecommendedThreadsLayoutComponent } from './layouts/recommended-threads-layout/recommended-threads-layout.component';
import { MyThreadsLayoutComponent } from './layouts/my-threads-layout/my-threads-layout.component';
import { AccountDetailsLayoutComponent } from './layouts/account-details-layout/account-details-layout.component';
import { SettingLayoutComponent } from './layouts/setting-layout/setting-layout.component';
import { CreateThreadsLayoutComponent } from './layouts/create-threads-layout/create-threads-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileNavbarComponent,
    ThreadlistNavbarComponent,
    SigninLayoutComponent,
    HomepageLayoutComponent,
    SigninFormComponent,
    CreateAccountFormComponent,
    CreateAccountLayoutComponent,
    FollowingThreadsLayoutComponent,
    RecommendedThreadsLayoutComponent,
    MyThreadsLayoutComponent,
    AccountDetailsLayoutComponent,
    SettingLayoutComponent,
    CreateThreadsLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
