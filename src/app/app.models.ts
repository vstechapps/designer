import { makeBindingParser, TagContentType } from "@angular/compiler";

export interface Node{
    id:string,
    tag:TAG|string,
    attributes:Map<string,string>,
    children:Node[],
    text?:string
  }

  export class NodeUtil{
    static create=function(element:string):Node{
      return {id:NodeUtil.id(10),tag:element,attributes:new Map(),children:[]}
    }
    static add=function(node:Node,element:string):Node{
      let e:Node=NodeUtil.create(element);
      let o=node.children.push(e);
      return node.children[o-1];
    }
    static id=function(length:number):string {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
  }
  }
  
  export enum TAG{
    DIV="div",SPAN="span",BUTTON="button",INPUT="input",IMG="img",P="p"
  }

  export const emptyElems = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

  export const isEmptyElement=function(e:string){
    return e!=null && emptyElems.indexOf(e.toLowerCase()) !== -1;
  }

  
export interface Form{
  name:string;
  title:string;
  controls:Control[];
  actions:Action[];
}


export interface Control{
  id:string;
  name?:string;
  type:string;
  label?:string;
  placeholder?:string;
  text?:string;
  values?:string[];
  value:string;
}

export interface Action{
  text:string;
  action:string;
}