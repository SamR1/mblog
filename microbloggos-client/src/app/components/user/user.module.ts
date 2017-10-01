import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserComponent} from './user/user.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

import { FormatDatePipe } from '../../pipes/format-date.pipe';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    UserComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
      FormatDatePipe,
      EditProfileComponent
  ]
})
export class UserModule { }
