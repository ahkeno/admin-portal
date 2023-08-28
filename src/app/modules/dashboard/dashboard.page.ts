import { Component,Input,Output } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';

@Component({
    selector: 'app-login',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
  })
  export class DashboardPage {
    showUserComponent: boolean = false;
    showDashboardCompoent: boolean = true;
    constructor(){}
    ngOnInit() {}
    bind(){

    }
    onNavMenuClick(event:any){
      if( event == 'user')
      {
        this.showUserComponent = !this.showUserComponent;
        this. showDashboardCompoent = !this.showDashboardCompoent;
      }
    }
  }