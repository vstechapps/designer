import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Control, Form } from '../app.models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent {

  @Input()
  form?:Form;
  
  @Output()
  submit:EventEmitter<string> = new EventEmitter();

  update(c:Control,e:any) {
    c.value = e.target.value;
    
  }

}
