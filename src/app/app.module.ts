import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CoreModule }	from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { DashboardPage } from './modules/dashboard/dashboard.page';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { CreateNewUserComponent } from './components/user/create-new-user/create-new-user.component';
import { RoleComponent } from './components/role/role.component';
import { RoleListComponent } from './components/role/role-list/role-list.component';
import { CreateNewRoleComponent } from './components/role/create-new-role/create-new-role.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    NavigationMenuComponent,
    UserComponent,
    UserListComponent,
    CreateNewUserComponent,
    RoleComponent,
    RoleListComponent,
    CreateNewRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CoreModule,
    
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
