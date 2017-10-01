import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AllusersComponent } from './allusers/allusers.component';
import { ViewUserComponent } from './view-user/view-user.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        AllusersComponent,
        ViewUserComponent
    ]
})
export class UsersModule { }
