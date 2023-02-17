import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit{

  @Output()
  close:EventEmitter<boolean> = new EventEmitter();

  @Output()
  action:EventEmitter<string> = new EventEmitter();

  
  ngOnInit(): void {
  }

  
}
