import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../../product-card/product-card.component';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component extends ProductCardComponent implements OnInit {

  // constructor() { }

  ngOnInit() {
  }

}
