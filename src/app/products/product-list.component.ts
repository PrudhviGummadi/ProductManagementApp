import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle:string= "Product List";
  imageWidth:number= 50;
  imageHeight:number=2;
  showImage: boolean=false;
  _listFilter: string='';
  filteredProducts: IProduct[];
  errorMessage:string;

  get listFilter():string{
    return this._listFilter;
  }

  set listFilter(value:string){
    this._listFilter=value;
    this.filteredProducts=this.listFilter?this.performFilter(this.listFilter):this.products;
  }

  products:IProduct[]; 
 
  constructor(private productService:ProductService) { 
    console.log("Inside the constructor");
  }

  ngOnInit() {
    console.log("Inside init method");
    this.productService.getProducts().subscribe(
      (products)=>{
        this.products=products;
        this.filteredProducts=this.products;
      }, (error) => this.errorMessage=<any>error
    );
  }

  private toggleImage():void{
      this.showImage=!this.showImage;
  }

  performFilter(filterBy: string): IProduct[]{
    filterBy=filterBy.toLocaleLowerCase();
    let matchedProducts: IProduct[]= this.products.filter((product:IProduct)=>{
    return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    });
    console.log(matchedProducts);
    return matchedProducts;
  }

  onNotify(message:string):void{
    this.pageTitle=message;
  }

}
