import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { NavComponent } from '../nav/nav.component';
import { UserComponent } from '../user/user.component';
import { AllusersComponent } from './allusers/allusers.component';

const routes: Routes = [
    {
        path: 'users',
        component: MainLayoutComponent,
        data: {
            composition:
                {
                    left: [ NavComponent, UserComponent ],
                    right: [ AllusersComponent ]
                }
        },
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule { }
