import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent extends ProductCardComponent implements OnInit {

  //  constructor() { }

   ngOnInit() {
   }


}
