import { Component } from '@angular/core';
import { Node } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  menu:boolean=false;
  design?:Node;
  current?:Node;

}