import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})

export class SetBackgroundDirective implements OnInit{
    constructor(private element:ElementRef){

    }

    ngOnInit(): void {
        this.element.nativeElement.style.backgroundColor = '#000';
        this.element.nativeElement.style.color = 'white';
    }
}