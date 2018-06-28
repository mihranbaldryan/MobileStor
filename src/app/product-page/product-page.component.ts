import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-page',
  inputs: ['card'],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'] 
})
export class ProductPageComponent implements OnInit {
  card:any;
  constructor() { }

   ngOnInit() {
   }


}
