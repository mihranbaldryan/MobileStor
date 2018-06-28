import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  inputs: ["card"],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'] 
})
export class ProductPageComponent implements OnInit {
    card;
  public constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.card=params;
    })
   }

  ngOnInit() {
  }

}
