import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from '../modules/login/login.page';
import { DashboardPage } from '../modules/dashboard/dashboard.page';
import { UserComponent } from '../components/user/user.component';
import { CreateNewUserComponent } from '../components/user/create-new-user/create-new-user.component';
import { UserListComponent } from '../components/user/user-list/user-list.component';
import { RoleComponent } from '../components/role/role.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'dashboard',
    component: DashboardPage
  },
  {
    path: 'role',
    component: RoleComponent
  },
  {
    path: 'user',
    component: UserComponent,
    children:[
      {
        path: 'new',
        component: CreateNewUserComponent
     },
     {
        path: 'list',
        component: UserListComponent
     }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
