import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less']
})
export class DialogComponent {

  @Input()
  dialog?: Dialog;

  @Output()
  action:EventEmitter<string> = new EventEmitter<string>();

}

export interface Dialog{
  action:string;
  title:string;
  options:Option[];
}

export interface Option{
  text:string;
  action:string;
}