import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from '../modules/login/login.page';
import { DashboardPage } from '../modules/dashboard/dashboard.page';
import { UserComponent } from '../components/user-management/user.component';
import { CreateNewUserComponent } from '../components/user-management/create-new-user/create-new-user.component';
import { UserListComponent } from '../components/user-management/user-list/user-list.component';
import { RoleComponent } from '../components/role/role.component';
import { RestaurantManagementComponent } from '../components/restaurant-management/restaurant-management.component';
import { RestaurantListComponent } from '../components/restaurant-management/restaurant-list/restaurant-list.component'
import { OutletListComponent } from '../components/restaurant-management/outlet-list/outlet-list.component';
import { CreateGroupComponent } from '../components/restaurant-management/create-group/create-group.component';
import { GroupListComponent } from '../components/restaurant-management/group-list/group-list.component';
import { CreateNewRoleComponent } from '../components/role/create-new-role/create-new-role.component';
import { RoleListComponent } from '../components/role/role-list/role-list.component';
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
    component: RoleComponent,
    children:[
      {
        path: 'new',
        component: CreateNewRoleComponent,
        pathMatch: 'full'
     },
     {
      path: 'list',
      component: RoleListComponent,
      pathMatch: 'full'
   }]
  },
  {
    path: 'user',
    component: UserComponent,
    children:[
      {
        path: 'new',
        component: CreateNewUserComponent,
        pathMatch: 'full'
     },
     {
        path: 'list',
        component: UserListComponent,
        pathMatch: 'full'
     }
    ]
  },
  {
    path: 'restaurant',
    component: RestaurantManagementComponent,
    children:[
      {
        path: 'group/new',
        component: CreateGroupComponent,
        pathMatch: 'full'
     },
     {
        path: 'list',
        component: GroupListComponent,
        pathMatch: 'full'
     }
    ]
  },
  {
    path: 'restaurant/list',
    component: RestaurantListComponent
  },
  {
    path: 'outlet/list',
    component: OutletListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
