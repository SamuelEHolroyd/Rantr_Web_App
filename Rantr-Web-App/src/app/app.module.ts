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
import { CreateThreadsLayoutComponent } from './layouts/create-threads-layout/create-threads-layout.component';
import { CreateThreadFormComponent } from './components/create-thread-form/create-thread-form.component';
import { SettingLayoutComponent } from './layouts/settings-sidebar/setting-layout.component';
import { SecurityAndAccountAccessComponent } from './layouts/settings-sidebar/security-and-account-access/security-and-account-access.component';
import { PrivacyAndSafetyComponent } from './layouts/settings-sidebar/privacy-and-safety/privacy-and-safety.component';
import { NotificationsComponent } from './layouts/settings-sidebar/notifications/notifications.component';
import { AboutComponent } from './layouts/settings-sidebar/about/about.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import {FormsModule} from "@angular/forms";
import { ThreadDisplayCardComponent } from './components/thread-display-card/thread-display-card.component';
import { SettingsNavbarComponent } from './components/settings-navbar/settings-navbar.component';


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
    CreateThreadFormComponent,
    SecurityAndAccountAccessComponent,
    PrivacyAndSafetyComponent,
    NotificationsComponent,
    AboutComponent,
    ThreadDisplayCardComponent,
    SettingsNavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
