import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './components/main/main-layout/main-layout.component';
import { NavComponent } from './components/main/nav/nav.component';
import { UserComponent } from './components/user/user/user.component';
import { HomeComponent } from './components/main/home/home.component';


const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        data: {
            composition:
                {
                    left: [ NavComponent, UserComponent ],
                    right: [ HomeComponent ]
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
export class AppRoutingModule { }
