import { Component, ViewChild, AfterViewChecked } from '@angular/core';
import { Product } from '../_datatype.types';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterViewChecked{

  @ViewChild('productListComp') productListComponent! : ProductListComponent;

  selectedProd!:Product;

 
  ngAfterViewChecked(){
    
    this.selectedProd = this.productListComponent.selectedProduct;
    // console.log(this.selectedProd);
    
  }
}
