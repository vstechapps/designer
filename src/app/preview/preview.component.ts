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
    this.html = this.process(this.design);
  }

  process(node?: Node): string {
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
        for (let c of node.children) {
          childText += this.process(c) + "\n";
        }
        childText = childText == "" ? childText : "\n" + childText;
        text = "<" + node.tag + attributeText + ">" + childText + "</" + node.tag + ">";
      }
    }
    return text;
  }

}
