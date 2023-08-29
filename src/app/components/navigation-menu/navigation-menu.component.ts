import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent {
  isSuperAdmin: boolean = true; // TODO: later this flag will come from API
}
