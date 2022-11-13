import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAdddropdown]'
})
export class AdddropdownDirective {

  constructor() { }

 @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(){
  this.isOpen = !this.isOpen;
  }

}
