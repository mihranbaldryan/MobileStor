import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent extends ProductCardComponent implements OnInit {

  
 // constructor() { }

  ngOnInit() {
  }

}
