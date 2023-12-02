import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() all : number = 0;
  @Input() inStock:number = 0;
  @Input() outOfStock:number = 0;

  @Output() changeFilter : EventEmitter<string> = new EventEmitter<string>();
  selectedFilterBtn: string = 'all';
  
  onChangeFiltered(){
      this.changeFilter.emit(this.selectedFilterBtn);
  }
}
