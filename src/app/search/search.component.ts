import { Component, } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchValue: string = ""

  onSearchText(data: HTMLInputElement) {
    // debugger
    // if (event.target != null &&'value' in event.target && event.target?.value != null )
    this.searchValue =  data.value;
    console.log(this.searchValue);
    
  }

}
