import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../../products.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
likeId;
  @Input() card;
likeColor:any="";
shopping_cartColor:any="";
compareColor:any="";
  constructor(private productsService:ProductsService) {}

  ngOnInit() {
    this.likeId=document.getElementById("like");
    if(!this.card.like){
     
      this.likeColor="#475498";
   
    }
    if(!this.card.shopping_cart){
     
      this.shopping_cartColor="#475498";
   
    }
    if(!this.card.compare){
     
      this.compareColor="#475498";
   
    }
  }

  shopping_cart(){ 
   
    if(this.card.shopping_cart){
      this.productsService.shoppingCart.push(this.card);
      
      this.shopping_cartColor="#475498"
    this.card.shopping_cart=!this.card.shopping_cart;
    }
    else{
     
      this.productsService.shoppingCart.splice( this.productsService.shoppingCart.indexOf(this.card), 1)
  
      this.shopping_cartColor=""
      this.card.shopping_cart=!this.card.shopping_cart;
    }
  }


  compare(){
    if(this.card.compare){
      this.productsService.compare.push(this.card);
      
      this.compareColor="#475498"
    this.card.compare=!this.card.compare;
    }
    else{
     
      this.productsService.compare.splice( this.productsService.compare.indexOf(this.card), 1)
  
      this.compareColor=""
      this.card.compare=!this.card.compare;
    }
  
  }

  like(){
    if(this.card.like){
    this.productsService.like.push(this.card);
    
    this.likeColor="#475498"
  this.card.like=!this.card.like;
  }
  else{
   
    this.productsService.like.splice( this.productsService.like.indexOf(this.card), 1)

    this.likeColor=""
    this.card.like=!this.card.like;
  }
    
  }

 



 

  moreEvent(event) {
    return this.card;
  }


}
