import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category.model';
import { ProductModel } from '../models/product.model';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';
declare var $:any;

declare function mixitup(el:any):any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ProductService,CategoryService]
})
export class HomeComponent implements OnInit,AfterViewInit {

  constructor(private categoryService:CategoryService,private productService:ProductService) { }
  categories!:CategoryModel[]|null;
  query:string='';
  searchProducts:ProductModel[]=[];
  mouseOvered!:boolean;
  categorySelect!:boolean;
  category!:CategoryModel|undefined;
  @ViewChild('#searchEl') searchEl!:ElementRef;

  ngAfterViewInit(){
    this.afterInitScripts();
    this.initSripts();
  }
    ngOnInit(){

        this.categoryService.get().subscribe((categories:CategoryModel[])=>{
            this.categories = categories;
        });


    }

    categoryProducts(id:number):Observable<ProductModel[]>{
        let products:ProductModel[] = [];

        return this.productService.categoryProducts(id)
    }

    searchCategory(category:CategoryModel|undefined){
        this.category = category;
        this.categorySelect=false;
        console.log(this.category);

    }

    search():ProductModel[]{

        if(this.category!==undefined){
            this.productService.categoryProducts(this.category.id).subscribe(p=>{

                if(this.query!==''){
                   p = p.filter(i=>i.name.toLowerCase().includes(this.query.toLowerCase()))
                }
                this.searchProducts = p
                console.log(p);
            });
        }else{
            this.productService.get().subscribe(p=>{
                if(this.query!==''){
                    p = p.filter(i=>i.name.toLowerCase().includes(this.query.toLowerCase()))
                 }
                this.searchProducts =p;
            })
        }

        return this.searchProducts;
    }




    initSripts(){

        $('.featured__controls li').on('click', function (e:any) {alert
            alert
            $('.featured__controls li').removeClass('active');
            $(e.target).addClass('active');
        });
        if ($('.featured__filter').length > 0) {
            var containerEl = document.querySelector('.featured__filter');
            var mixer = mixitup(containerEl);
        }


        /*--------------------------
            Latest Product Slider
        ----------------------------*/
        $(".latest-product__slider").owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            dots: false,
            nav: true,
            navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true
        });

        /*-----------------------------
            Product Discount Slider
        -------------------------------*/


        /*---------------------------------
            Product Details Pic Slider
        ----------------------------------*/
        $(".product__details__pic__slider").owlCarousel({
            loop: true,
            margin: 20,
            items: 4,
            dots: true,
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true
        });


    }

    afterInitScripts(){
/*-----------------------
        Categories Slider
    ------------------------*/
    $(".categories__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            0: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 3,
            },

            992: {
                items: 4,
            }
        }
    });


    $('.hero__categories__all').on('click', function(){
        $('.hero__categories ul').slideToggle(400);
    });
    }



}
