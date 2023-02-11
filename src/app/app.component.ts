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
    if(DialogOptions[action]!=null){
      return this.dialog=DialogOptions[action];
    }
    if(action=="preview"){
      this.preview=!this.preview;
    }
  }
}

export const DialogOptions:any={
  "add":[{action:"add",Title:"Add",options:[
    {text:"Element",action:"add_element"},
    {text:"Attribute",action:"add_attribute"}
  ]}],
  "add_element":[{action:"add_element",Title:"Add Element",options:[
    {text:"Div",action:"add_element_div"},
    {text:"Span",action:"add_element_p"},
    {text:"Button",action:"add_element_button"},
    {text:"Input",action:"add_element_input"},
    {text:"Paragraph",action:"add_element_p"},
    {text:"Image",action:"add_element_img"},
    {text:"Video",action:"add_element_video"}
  ]}]
}