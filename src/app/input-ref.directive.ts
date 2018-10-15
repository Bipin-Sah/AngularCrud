import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputRef]'
})
export class InputRefDirective {

  focus = false;

  @HostListener("focus")

  onfocus() {
    this.focus = true;
  }

  @HostListener("blur")
  onblur() {
    this.focus = false;
  }

  constructor() { }

}
