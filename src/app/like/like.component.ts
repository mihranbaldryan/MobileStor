import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  product:any;
  constructor(private productsService:ProductsService){

  }

  ngOnInit() {
    this.product=this.productsService.like;
  }


}
