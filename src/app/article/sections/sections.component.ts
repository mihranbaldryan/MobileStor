import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../product-card/product-card.component';
import {Router} from '@angular/router';
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
  // private router:Router;r

  section1(){
   
   
      this.router.navigate(['ProductSection1']);
       }

}
