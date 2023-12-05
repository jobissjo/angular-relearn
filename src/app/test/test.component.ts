import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  @ContentChild('para') paraEl! : ElementRef;
  @ContentChildren('para') paraElements ! : QueryList<ElementRef>;
  show(){
    // console.log(this.paraEl.nativeElement);
    // this.paraEl.nativeElement.style.backgroundColor = '#000';
    this.paraElements.forEach((ele) => {
      console.log(ele.nativeElement);
    })
  }
}
