import { Component, Input } from '@angular/core';
import { Product } from '../_datatype.types';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  @Input() selectedProduct !:Product;

}
