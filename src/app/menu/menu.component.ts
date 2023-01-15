import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {

  @Output()
  close:EventEmitter<boolean> = new EventEmitter();

  @Output()
  action:EventEmitter<string> = new EventEmitter();
}
