import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent} from './user/user.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    UserComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ]
})
export class UserModule { }
