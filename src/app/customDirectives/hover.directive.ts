import { Directive,ElementRef, HostBinding, HostListener, Renderer2  } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element : ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') background : string = 'black';
  @HostBinding('style.color') color : string = 'white';
  @HostBinding('style.border') border : string = '3px solid grey';

  @HostListener('mouseenter') onMouseEnter(){
    this.background = 'white';
    this.border = '3px solid black';
    this.color = 'black';
  }

  @HostListener('mouseout') onMouseOut(){
    this.background = 'black';
    this.border = '3px solid black';
    this.color = 'white';
  }

}
