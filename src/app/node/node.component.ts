import { Component, Input } from '@angular/core';
import { Node } from '../app.models';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.less']
})
export class NodeComponent {

  @Input()
  node?:Node;

  expand=false;

}
