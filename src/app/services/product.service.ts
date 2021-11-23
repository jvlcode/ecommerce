import { ProductModel } from "../models/product.model";
import { of } from "rxjs";
import { Injectable } from "@angular/core";
import { CategoryService } from "./category.service";

@Injectable()
export class ProductService{
  products!:ProductModel[];

  constructor(private categoryService:CategoryService){
    this.products = [new ProductModel('1','Product 1',5,null,'pro1',3),new ProductModel('2','Product 2',6,null,'pro2',2)]
  }
  get(){
    return of([new ProductModel('1','Product 1',5,null,'pro1',1),new ProductModel('2','Product 2',6,null,'pro2',2)]);
    // return this.http.
    // get<CategoryModel[]>('https://learn-angular-4a577-default-rtdb.firebaseio.com/categories.json')

  }
  findSlug(slug:string){
    // return this.http.
    // get<CategoryModel[]>('https://learn-angular-4a577-default-rtdb.firebaseio.com/categories.json?equalTo='+id)
    let product =  this.products.find(product=>product.slug==slug);
    if(product!=undefined){
        let category = this.categoryService.find(product.category_id);
        product = {...product,category:category};
    }
    return product;
  }
  categoryProducts(category_id:number){
    let products = this.products.filter(product=>product.category_id==category_id);
    return of(products);
    // return this.http.
    // get<CategoryModel[]>('https://learn-angular-4a577-default-rtdb.firebaseio.com/products.json?equalTo='+category_id)
  }
}
