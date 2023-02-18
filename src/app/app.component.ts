import { Component, EventEmitter } from '@angular/core';
import { Node, NodeUtil, TAG, Form, Control } from './app.models';
import { AppService } from './app.service';
import { Dialog } from './dialog/dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  menu:boolean=true;
  design?:Node;
  current?:Node;
  dialog?:Dialog;

  constructor(public appService:AppService){

  }

  select(node:Node){
    console.log(node);
    this.current = node;
  }

  perform(action:string){
    if(DialogActions[action]!=null){
      return this.dialog=DialogActions[action];
    }
    if(action=="close_dialog"){
      this.dialog=undefined;
    }
    if(action=="copy"){
      this.appService.events.emit("copy");
    }
    if(action.indexOf("add_element_")>-1){
      let t=action.replace("add_element_","");
      if(this.current==undefined){
        this.current=NodeUtil.create(t);
        this.design=this.current;
      }
      else{
        NodeUtil.add(this.current,t);
      }
      this.perform("close_dialog");
    }
    if(action.indexOf("add_text_")>-1){
      if(this.current){
        this.current.text=this.dialog?.form?.controls[0].value;
      }
      console.log("Form",this.dialog?.form);
      this.perform("close_dialog");
    }
    if(action.indexOf("add_class_")>-1){
      if(this.current){
        let c = this.current.attributes.get("class");
        let k = this.dialog?.form?.controls[0].value;
        c = c?c+" "+k:k;
        if(c)this.current.attributes.set("class",c);
      }
      console.log("Form",this.dialog?.form);
      this.perform("close_dialog");
    }
    if(action.indexOf("add_style_")>-1){
      if(this.current){
        let c = this.current.attributes.get("style");
        let k = this.dialog?.form?.controls[0].value;
        let v = this.dialog?.form?.controls[1].value;
        c = c?c+k+":"+v+";":""+k+":"+v+";";
        if(c)this.current.attributes.set("style",c);
      }
      console.log("Form",this.dialog?.form);
      this.perform("close_dialog");
    }
    console.log("Design",this.design);
    this.appService.events.emit("preview");
    
  }
}

export const DialogActions:any={
  "add":{action:"add",title:"Add",actions:[
    {text:"Element",action:"add_element"},
    {text:"Text",action:"add_text"},
    {text:"Class",action:"add_class"},
    {text:"Style",action:"add_style"},
    {text:"Attribute",action:"add_attribute"},
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
    controls:[{id:"addtext",type:"text",placeholder:"Enter text here..",value:''}],
    actions:[{text:"Add",action:"add_text_"}]
  }},
  "add_class":{action:"add_class",title:"Add Class",form:{
    title:"Add Class",
    controls:[{id:"addclass",type:"text",placeholder:"Specify class..",value:''}],
    actions:[{text:"Add",action:"add_class_"}]
  }},
  "add_style":{action:"add_text",title:"Add Text",form:{
    title:"Add Style",
    controls:[
      {id:"addstylekey",type:"text",placeholder:"name",value:''},
      {id:"addstylevalue",type:"text",placeholder:"value",value:''}],
    actions:[{text:"Add",action:"add_style_"}]
  }},
  "add_attribute":{action:"add_attribute",title:"Add Attribute",actions:[
    {text:"Name",action:"add_attribute_name"},
    {text:"Href",action:"add_attribute_href"}
  ]}
}