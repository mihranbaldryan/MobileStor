import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../../product-card/product-card.component';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component extends ProductCardComponent implements OnInit {

  // constructor() { }

  ngOnInit() {
  }

}
