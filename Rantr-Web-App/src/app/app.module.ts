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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
