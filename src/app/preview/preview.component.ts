import { Component, Input, OnInit } from '@angular/core';
import { isEmptyElement, Node } from '../app.models';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.less']
})
export class PreviewComponent implements OnInit {

  @Input()
  design?: Node;

  html: string = "";

  ngOnInit() {
    console.log("Rendering Preview ...")
    this.html = this.process(this.design);
  }

  process(node?: Node): string {
    console.log("Processing ",node);
    let text: string = "";
    if (node) {
      let isEmpty: boolean = isEmptyElement(node.tag);
      let attributeText = "";
      for (let a of node.attributes) {
        attributeText += "\"" + a[0] + "=" + a[1] + "\" ";
      }
      attributeText = attributeText == "" ? attributeText : " " + attributeText;
      if (isEmpty) {
        text = "<" + node.tag + attributeText + "/>";
      } else {
        let childText = "";
        if(node.text){
          childText += node.text;
        }
        for (let c of node.children) {
          childText += this.process(c);
        }
        text = "<" + node.tag + attributeText + ">" + childText + "</" + node.tag + ">";
      }
    }
    console.log(text);
    return text;
  }

}
