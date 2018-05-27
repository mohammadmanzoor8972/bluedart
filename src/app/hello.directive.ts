import { Directive } from '@angular/core';
import { hostElement } from '@angular/core/src/render3/instructions';

@Directive({
  selector: '[appHello]'  
})
export class HelloDirective {
 
  constructor() { 
    return "<h1>Hello World</h1>";
  }

}
