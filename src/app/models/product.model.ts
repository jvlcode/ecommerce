import { CategoryModel } from "./category.model";
export class ProductModel{
    id!:number;
    name!:string;
    price!:number;
    image!:string|null;
    description!:string;
    slug!:string;
    category_id!:number;
     category!:CategoryModel|undefined;
    is_available=true;
    shipping_days!:number;
    is_shipping_free!:boolean;
    weight!:number;
    images!:Array<string>;

    constructor(id:number,name:string,price:number,image:string|null,images:Array<string>,description:string,slug:string,category_id:number,weight:number,shipping_days:number,is_available:boolean,is_shipping_free:boolean){
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.slug = slug;
        this.category_id = category_id;
        this.is_available = is_available;
        this.weight = weight;
        this.shipping_days = shipping_days
        this.is_available = is_available;
        this.is_shipping_free = is_shipping_free;
        this.images = images
        this.description = description
    }

    get shippingText(){
      return this.is_shipping_free?'Free':this.shipping_days+' Days';
    }
    get availableText(){
      return this.is_available?'In Stock':'Out of stock';
    }
    get weightText(){
      return this.weight + ' kg';
    }


  }
