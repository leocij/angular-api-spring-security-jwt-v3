import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { UsersComponent } from './component/users/users.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    PmComponent,
    AdminComponent,
    RegisterComponent,
    UsersComponent,
    NavbarComponent,
    UserInfoComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // npm i ngx-toastr
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

    // npm i @ng-bootstrap/ng-bootstrap
    NgbModule
  ],
  entryComponents: [ ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
