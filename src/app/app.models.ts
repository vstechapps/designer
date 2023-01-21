
export interface Node{
    id:string,
    tag:TAG,
    attributes:Map<string,string>;
    children:Node[]
  }
  
  export enum TAG{
    DIV="div",SPAN="span",BUTTON="button",INPUT="input",IMG="img",P="p"
  }

  export const emptyElems = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

  export const isEmptyElement=function(e:string){
    return e!=null && emptyElems.indexOf(e.toLowerCase()) !== -1;
  }