import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL:String;

  constructor(private httpclient:HttpClient, private userService:UserService) {
    this.baseURL = 'http://localhost:5000/api'
   }

  public getAllProducts(){
    return this.httpclient.get<Product[]>(this.baseURL+'/producto/all');
  }

  public updateProduct(producto:Product){
    return this.httpclient.patch(this.baseURL+ '/producto/update', producto);
 }

  public getProduct(ID:String){
    return this.httpclient.get<Product>(this.baseURL + '/producto/' + ID);
  }
}
