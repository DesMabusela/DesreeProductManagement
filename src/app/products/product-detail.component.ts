import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string='Product Detail';
  product: IProduct;
  
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    //fetch product with http
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }

  

}
