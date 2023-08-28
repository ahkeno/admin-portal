import { Component,EventEmitter,Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgIf, NgFor} from '@angular/common';


@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent {

  events: string[] = [];
  opened: boolean = true;
  @Output() onMenuClick = new EventEmitter<string>();

  loadMenu(events:any){
    this.onMenuClick.emit(events);
  }
}
