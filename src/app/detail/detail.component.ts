import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../models/product.model';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProductService,CategoryService]
})
export class DetailComponent implements OnInit {

  constructor(private productService:ProductService,private route:ActivatedRoute) { }
  product!:ProductModel|undefined;

  ngOnInit(): void {
    this.product = this.productService.findSlug(this.route.snapshot.params['slug']);
  }

}
