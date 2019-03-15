import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string="Product Detail: ";
  product:IProduct;
  products:IProduct[];
  errorMessage:string;

  constructor(private route:ActivatedRoute, private service:ProductService, private router:Router) {
    console.log('Product Detail Component constructor is invoked');
   }

  ngOnInit() {
    let id=+this.route.snapshot.paramMap.get('id');
    this.pageTitle+=`${id}`;
    this.service.getProducts().subscribe(
      (products)=>{
        products.forEach((product)=>{
          if(product && product.productId===id){
            this.product=product;
          }
        });
      }, (error) => this.errorMessage=<any>error
    );
    }

    onClick():void{
      this.router.navigate(['/products']);
    }

}
