import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.scss']
})
export class NumberCardComponent {
 @Input() displayData: any;
 @Input()  bgcolor: any;

}
