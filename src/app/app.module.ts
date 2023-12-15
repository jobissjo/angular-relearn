
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NewComponent } from './new/new.component';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';
import { TestComponent } from './test/test.component';
import { SetBackgroundDirective } from './customDirectives/setBackground.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailsComponent,
    NewComponent,
    FeaturedBrandsComponent,
    TestComponent,
    SetBackgroundDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
