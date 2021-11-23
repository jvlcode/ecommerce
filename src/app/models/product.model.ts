import { CategoryModel } from "./category.model";
import { CategoryService } from "../services/category.service";
export class ProductModel{
    id!:string;
    name!:string;
    price!:number;
    image!:string|null;
    slug!:string;
    category_id!:number;
    category!:CategoryModel|undefined;

    constructor(id:string,name:string,price:number,image:string|null,slug:string,category_id:number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.slug = slug;
        this.category_id = category_id;
    }


  }
