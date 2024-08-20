import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  el: ElementRef;
  constructor(el:ElementRef) {
    this.el = el;
   }
  
  // constructor(private el:ElementRef){           we can also write in short way like this

  // }

   @HostBinding("style.Color")
   Color = "red";

   @HostListener("mouseenter")
   changeFontSize(){
    this.el.nativeElement.style.fontSize ="20px"
   }

   @HostListener("mouseleave")
   resetFontSize(){
    this.el.nativeElement.style.fontSize = "10px"
   }

}
