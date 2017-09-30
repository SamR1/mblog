import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { MainLayoutComponent } from './components/main/main-layout/main-layout.component';
import { NavComponent } from './components/main/nav/nav.component';
import { PostComponent } from './components/post/post.component';

import { UserModule } from './components/user/user.module';
import { UserRoutingModule } from './components/user/user-routing.module';

import { UsersModule } from './components/users/users.module';
import { UsersRoutingModule } from './components/users/users-routing.module';



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
