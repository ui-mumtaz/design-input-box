import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'custom-input input'
})
export class InputRefDirective {

  focus = false;

  @HostListener('focus')
  onFocus() {
    this.focus = true
    console.log('aaa')
  }

  @HostListener('blur')
  onBlur() {
    this.focus = false
    console.log('bbb')
  }

}
