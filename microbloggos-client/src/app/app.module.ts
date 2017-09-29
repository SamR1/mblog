import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { MainLayoutComponent } from './main/main-layout/main-layout.component';
import { NavComponent } from './main/nav/nav.component';
import { PostComponent } from './post/post.component';

import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user-routing.module';

import { UsersModule } from './users/users.module';
import { UsersRoutingModule } from './users/users-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NavComponent,
    PostComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    UserModule,
    UserRoutingModule,
    UsersModule,
    UsersRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
