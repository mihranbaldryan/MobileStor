import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ProductCardComponent } from '../../product-card/product-card.component';
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent extends ProductCardComponent implements OnInit {

  constructor( protected router:Router){
    super(router);
  }

  ngOnInit() {
   
  }

}
