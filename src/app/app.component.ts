import { Component } from '@angular/core';
import { Node, TAG } from './app.models';
import { Dialog } from './dialog/dialog.component';

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
  dialog?:Dialog;


  perform(action:string){
    let actions:string[]  = action.split("_");
    console.log("Actions: "+actions);
    if(actions.length==0)return;
    if(actions[0]=="add"){
      if(actions.length==1) this.dialog={action:"add",title:"",options:[]}
      
    }
    if(action=="preview"){
      this.preview=!this.preview;
    }
  }
}