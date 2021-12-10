export class CategoryModel{
  id!:number;
  name!:string;
  slug!:string;
  image!:string

    constructor(id:number,name:string,slug:string,image:string){
        this.id = id;
        this.name = name;
        this.image= image
        this.slug = slug;
    }



}
