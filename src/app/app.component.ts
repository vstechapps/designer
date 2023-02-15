import { Component } from '@angular/core';
import { Node, NodeUtil, TAG, Form, Control } from './app.models';
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

  select(node:Node){
    console.log(node);
    this.current = node;
  }

  perform(action:string){
    if(DialogActions[action]!=null){
      return this.dialog=DialogActions[action];
    }
    if(action=="preview"){
      this.preview=!this.preview;
    }
    if(action=="close_dialog"){
      this.dialog=undefined;
    }
    if(action.indexOf("add_element_")>-1){
      let t=action.replace("add_element_","");
      if(this.current==undefined){
        this.current=NodeUtil.create(t);
        this.design=this.current;
      }
      else{
        this.current=NodeUtil.add(this.current,t);
      }
    }
    console.log("Design",this.design);
  }
}

export const DialogActions:any={
  "add":{action:"add",title:"Add",actions:[
    {text:"Element",action:"add_element"},
    {text:"Attribute",action:"add_attribute"},
    {text:"Text",action:"add_text"}
  ]},
  "add_element":{action:"add_element",title:"Add Element",actions:[
    {text:"Div",action:"add_element_div"},
    {text:"Span",action:"add_element_span"},
    {text:"Button",action:"add_element_button"},
    {text:"Input",action:"add_element_input"},
    {text:"Paragraph",action:"add_element_p"},
    {text:"Image",action:"add_element_img"},
    {text:"Video",action:"add_element_video"}
  ]},
  "add_text":{action:"add_text",title:"Add Text",form:{
    title:"Add Text",
    controls:[{id:"addtext",type:"text",placeholder:"Enter text here.."}],
    actions:[{text:"Add",action:"add_text_"}]
  }}
}