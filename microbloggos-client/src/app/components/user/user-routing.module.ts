import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from '../main/main-layout/main-layout.component';
import { NavComponent } from '../main/nav/nav.component';
import { UserComponent} from './user/user.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
    {
        path: 'login',
        component: MainLayoutComponent,
        data: {
            composition:
                {
                    left: [ NavComponent, UserComponent ],
                    right: [ LoginComponent ]
                }
        },
    },
    {
        path: 'register',
        component: MainLayoutComponent,
        data: {
            composition:
                {
                    left: [NavComponent, UserComponent],
                    right: [RegisterComponent]
                }
        }
    },
    {
        path: 'profile',
        component: MainLayoutComponent,
        data: {
            composition:
                {
                    left: [NavComponent, UserComponent],
                    right: [ProfileComponent]
                }
        }
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
