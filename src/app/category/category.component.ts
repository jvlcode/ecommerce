import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { CategoryModel } from '../models/category.model';
import { ProductModel } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
declare var $:any;
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[ProductService,CategoryService]
})
export class CategoryComponent implements OnInit {
  products!:ProductModel[];
  category!:CategoryModel|undefined;
  constructor(private categoryService:CategoryService,private productService:ProductService, private route:ActivatedRoute) { }

  sortBy(event:Event){
      let option = (event.target as HTMLSelectElement).value
      if(this.category!==undefined){
        this.productService.categoryProducts(this.category.id).subscribe(products=>{
            this.products = products

            if(option=='2'){
                this.products = this.products.sort((a,b)=>{
                    if(a.price<b.price){
                        return -1;
                    }
                    return 0;
                });
            }else if(option=='3'){
                this.products = this.products.sort((a,b)=>{
                    if(a.price>b.price){
                        return -1;
                    }
                    return 0;
                });
            }
        });
      }

  }

  ngOnInit(): void {
    this.category = this.categoryService.findSlug(this.route.snapshot.params['slug']);
    if(this.category!=undefined){
      this.productService.categoryProducts(this.category.id).subscribe(products=>{
        this.products = products;
     });
    }




 /*-----------------------
		Price Range Slider
	------------------------ */
    var rangeSlider = $(".price-range"),
        minamount = $("#minamount"),
        maxamount = $("#maxamount"),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
    rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event:Event, ui:any) {
            minamount.val('$' + ui.values[0]);
            maxamount.val('$' + ui.values[1]);
        }
    });
    minamount.val('$' + rangeSlider.slider("values", 0));
    maxamount.val('$' + rangeSlider.slider("values", 1));
  }

}
