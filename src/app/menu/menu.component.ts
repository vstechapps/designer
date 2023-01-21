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

  preview:boolean=false;

  
  ngOnInit(): void {
    this.action.subscribe(event=>{
      if(event=="preview"){
        this.preview=!this.preview;
      }
    });
  }

  
}
