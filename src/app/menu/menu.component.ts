import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';

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

  constructor(public app: AppService){

  }

  
  ngOnInit(): void {
  }

  
}
