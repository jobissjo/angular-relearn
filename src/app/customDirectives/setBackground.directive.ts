import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})

export class SetBackgroundDirective implements OnInit{
    constructor(private element:ElementRef, private renderer: Renderer2){
    }
    ngOnInit(): void {
        // this.element.nativeElement.style.backgroundColor = '#000';
        // this.element.nativeElement.style.color = 'white';

        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#000');
        this.renderer.setStyle(this.element.nativeElement, 'color', 'grey')
    }
}