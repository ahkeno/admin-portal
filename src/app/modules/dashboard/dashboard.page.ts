import { Component,Input,Output } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';

@Component({
    selector: 'app-login',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
  })
  export class DashboardPage {
    backgroundBlue = "bgblue";
    backgroundGreen = "bggreen";
    backgroundYellow = "bgyellow";
    backgroundRed = "bgred";
    //  TODO : display Data should come from API 
    restuarantCount = {
      number: 12,
      title: 'Restuarant'
    }
    groupCount= {
      number: 3,
      title: 'Group'
    }
    groupMenu= {
      number: 50,
      title: 'Total Menu'
    }
    totalOrder= {
      number: 141,
      title: 'Total Order'
    }
    constructor(){}
    ngOnInit() {}
    bind(){ }
    
  }