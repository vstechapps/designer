import { Component, EventEmitter } from '@angular/core';
import { Node, NodeUtil, TAG, Form, Control, STYLES } from './app.models';
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
    if(action=="delete"){
      if(!this.design || !this.current) return;
      NodeUtil.remove(this.design,this.current);
      this.current=this.design;
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
    if(action.indexOf("add_attribute_")>-1){
      if(this.current){
        let k = this.dialog?.form?.controls[0].value;
        let v = this.dialog?.form?.controls[1].value;
        if(k && v)this.current.attributes.set(k,v);
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
  "add_text":{form:{
    title:"Add Text",
    controls:[{id:"addtext",type:"text",placeholder:"Enter text here..",value:''}],
    actions:[{text:"Add",action:"add_text_"}]
  }},
  "add_class":{form:{
    title:"Add Class",
    controls:[{id:"addclass",type:"text",placeholder:"Specify class..",value:''}],
    actions:[{text:"Add",action:"add_class_"}]
  }},
  "add_style":{form:{
    title:"Add Style",
    controls:[
      {id:"addstylekey",type:"text",placeholder:"name",value:'',values:STYLES},
      {id:"addstylevalue",type:"text",placeholder:"value",value:''}],
    actions:[{text:"Add",action:"add_style_"}]
  }},
  "add_attribute":{form:{
    title:"Add Attribute",
    controls:[
      {id:"attributeKey",type:"text",placeholder:"name",value:''},
      {id:"attributeKey",type:"text",placeholder:"value",value:''}],
    actions:[{text:"Add",action:"add_attribute_"}]
  }}
}