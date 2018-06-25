import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { ProductCardComponent } from '../../../product-card/product-card.component';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

  cards=[1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit() {
  }

}
