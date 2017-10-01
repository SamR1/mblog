import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Http, HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { MainLayoutComponent } from './components/main/main-layout/main-layout.component';
import { NavComponent } from './components/main/nav/nav.component';
import { HomeComponent } from './components/main/home/home.component';

import { UserModule } from './components/user/user.module';
import { UserRoutingModule } from './components/user/user-routing.module';

import { UsersModule } from './components/users/users.module';
import { UsersRoutingModule } from './components/users/users-routing.module';

import { FormatDatePipe } from './pipes/format-date.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NavComponent,
    HomeComponent
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
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, FormatDatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
