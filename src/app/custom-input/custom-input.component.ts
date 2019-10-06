import { Component, OnInit, Input, ContentChild, AfterContentInit, HostBinding } from '@angular/core';
import { InputRefDirective } from './input-ref.directive';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit, AfterContentInit {

  @Input()
  icon: string;

   //@ContentChild('input')   By ref. variable
   // @ContentChild(HTMLInputElement)
   
   @ContentChild(InputRefDirective, {static: true})
   input: InputRefDirective;

  constructor() { }

  ngAfterContentInit(): void {
    console.log('input', this.input)
    
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  ngOnInit() {
  }

  get classes() {
    const cssClasses = {}

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }
}
