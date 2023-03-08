import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountLayoutComponent } from './layouts/create-account-layout/create-account-layout.component';
import { HomepageLayoutComponent } from './layouts/homepage-layout/homepage-layout.component';
import { SigninLayoutComponent } from './layouts/signin-layout/signin-layout.component';

const routes: Routes = [
  {path:'profile', component: HomepageLayoutComponent},
  {path:'create-account', component: CreateAccountLayoutComponent},
  {path:'', component: SigninLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
