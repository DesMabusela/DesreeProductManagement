import { Component, OnInit, OnDestroy } from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';
import { empty } from 'rxjs';

@Component({
   templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit
{
  pageTitle:string = 'Product List';
  showImage: boolean = true;
  errorMessage: string;

  private _listFilter: string;

  get listFilter(): string{
    return this._listFilter;
  }
  
  set listFilter(value:string){
    
    this._listFilter=value;

    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter):this.products;
  }

  filteredProducts: IProduct[];

  products: IProduct[];

 constructor(private productService: ProductService){
  
 }

 onRatingClicked(message:string): void{
   this.pageTitle = message;
 }

 ngOnInit(): void {
  this.productService.getProducts().subscribe({
    next: products => {
      this.products = products;
      this.filteredProducts = this.products;
    },
    error: err => this.errorMessage = err
  });
  

}
  toggleImage():void{
    this.showImage = !this.showImage;
  }
  
  performFilter(filterBy:string):IProduct[]{

    filterBy = filterBy.toLocaleLowerCase();
    
    return this.products.filter((product:IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);

    
  }
}
