import { Component, Input } from '@angular/core';
import { Product } from '../_datatype.types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product !: Product;
  

}
