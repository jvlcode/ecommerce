import { ProductModel } from "../models/product.model";
import { of } from "rxjs";
import { Injectable } from "@angular/core";
import { CategoryService } from "./category.service";

@Injectable()
export class ProductService{
  products!:ProductModel[];

  constructor(private categoryService:CategoryService){
    this.products = [
      new ProductModel(1,'Product 1',5,'assets/img/product/details/product-details-1.jpg',['assets/img/product/details/thumb-1.jpg'],'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.','product-1',1,2,3,true,false),
      new ProductModel(2,'Product 2',6,'assets/img/product/details/product-details-2.jpg',['assets/img/product/details/thumb-1.jpg'],' Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.','product-2',2,3,5,true,false),
      new ProductModel(3,'Product 3',50,'assets/img/product/details/product-details-3.jpg',['assets/img/product/details/thumb-1.jpg'],'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.','product-3',1,2,3,true,false),
      new ProductModel(4,'Product 4',36,'assets/img/product/details/product-details-4.jpg',['assets/img/product/details/thumb-1.jpg'],' Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.','product-4',2,3,5,true,false),
      new ProductModel(5,'Product 5',22,'assets/img/product/details/product-details-5.jpg',['assets/img/product/details/thumb-1.jpg'],' Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.','product-5',2,3,5,true,false)
  ]
  }
  get(){
    return of();
    // return this.http.
    // get<CategoryModel[]>('https://learn-angular-4a577-default-rtdb.firebaseio.com/categories.json')

  }
  findSlug(slug:string){
    // return this.http.
    // get<CategoryModel[]>('https://learn-angular-4a577-default-rtdb.firebaseio.com/categories.json?equalTo='+id)
    let product =  this.products.find(product=>product.slug==slug);
    if(product!=undefined){
        let category = this.categoryService.find(product.category_id);
        product['category'] = category;

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
