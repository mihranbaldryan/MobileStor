import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { ProductAddComponent } from '../../../product-add/product-add.component';
import { CardService } from '../../../card.service';
@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component  implements OnInit {
product:any;
  constructor(private Cardservice:CardService){

  }

  ngOnInit() {
    this.product=this.Cardservice.product;
  }

}
