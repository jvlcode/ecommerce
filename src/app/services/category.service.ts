import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs/index";
import { CategoryModel } from "../models/category.model";

@Injectable()
export class CategoryService{
    categories!:CategoryModel[];
    constructor(private http:HttpClient){
        this.categories = [new CategoryModel(2,'Category 2','cat2'),new CategoryModel(3,'Category 3','cat3')];
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
