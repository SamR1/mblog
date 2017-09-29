import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { UsersModule } from './users/users.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
// import { UsersComponent } from './users/users.component';
import { PostComponent } from './post/post.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';

import { AppRoutingModule } from './app-routing.module';
import { UserRoutingModule } from './users/users-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserComponent,
    PostComponent,
    MainLayoutComponent,
    LoginComponent,
    RegisterComponent,
    // UsersComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    UserRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
