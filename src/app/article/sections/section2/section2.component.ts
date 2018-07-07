import { Component, OnInit } from '@angular/core';
import { ProductAddComponent } from '../../../product-add/product-add.component';
import { CardService } from '../../../card.service';
@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component  implements OnInit {
product:any;
  constructor(private Cardservice:CardService){

  }

  ngOnInit() {
    this.product=this.Cardservice.product;
  }

}
