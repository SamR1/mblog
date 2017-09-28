import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        data: {
            composition:
                {
                    left: [ NavComponent, UserComponent ],
                    right: [ PostComponent]
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
export class AppRoutingModule { }
