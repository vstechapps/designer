import { Component } from '@angular/core';
import { Node, TAG } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  menu:boolean=false;
  design?:Node;
  current?:Node;
  preview:boolean=false;


  perform(action:string){
    console.log("Action: "+action);
    if(action=="add"){
      this.design={id:"div",tag:TAG.DIV,children:[],attributes: new Map<string,string>()}
    }
    if(action=="preview"){
      this.preview=!this.preview;
    }
  }

}