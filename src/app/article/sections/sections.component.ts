import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../product-card/product-card.component';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent extends ProductCardComponent implements OnInit {

  
  // constructor() { }

  ngOnInit() {
  }

}
