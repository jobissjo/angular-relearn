import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})

export class SetBackgroundDirective implements OnInit{
    constructor(private element:ElementRef, private renderer: Renderer2){
    }

    @Input('setBackground') bgColor: string = '#000';
    @Input() textColor:string = '#fff';
    ngOnInit(): void {
        // this.element.nativeElement.style.backgroundColor = '#000';
        // this.element.nativeElement.style.color = 'white';

        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.bgColor);
        this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor);
    }
}