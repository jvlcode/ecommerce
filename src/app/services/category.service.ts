import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs/index";
import { CategoryModel } from "../models/category.model";

@Injectable()
export class CategoryService{
    categories!:CategoryModel[];
    constructor(private http:HttpClient){
        this.categories = [
          new CategoryModel(1,'Category 1','cat2','assets/img/categories/cat-1.jpg'),
          new CategoryModel(2,'Category 2','cat3','assets/img/categories/cat-2.jpg')];
    }
    findSlug(slug:string){
      // return this.http.
      // get<CategoryModel[]>('https://learn-angular-4a577-default-rtdb.firebaseio.com/categories.json?equalTo='+id)
      return this.categories.find(category=>category.slug==slug);
    }
    find(id:number){
      // return this.http.
      // get<CategoryModel[]>('https://learn-angular-4a577-default-rtdb.firebaseio.com/categories.json?equalTo='+id)
      return this.categories.find(category=>category.id==id);
    }
    get(){
      return of(this.categories);
      // return this.http.
      // get<CategoryModel[]>('https://learn-angular-4a577-default-rtdb.firebaseio.com/categories.json')

    }



}
