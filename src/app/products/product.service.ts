import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl:string="api/products/products.json";

  constructor(private httpClient:HttpClient) { 

  }

  getProducts():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All '+ JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
      return throwError("An Exception Occured while fetching products...");
  }


}
