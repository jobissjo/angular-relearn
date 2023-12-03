import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  @ContentChild('para') paraEl! : ElementRef;

  show(){
    console.log(this.paraEl.nativeElement);
    this.paraEl.nativeElement.style.backgroundColor = '#000';
  }
}
