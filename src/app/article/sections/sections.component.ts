import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductAddComponent } from '../../product-add/product-add.component';
import { OVERLAY_KEYBOARD_DISPATCHER_PROVIDER } from '@angular/cdk/overlay/typings/keyboard/overlay-keyboard-dispatcher';
import { CardService } from '../../card.service';
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent  implements OnInit {
  product:any;
  constructor(private Cardservice:CardService){

  }

  ngOnInit() {
    // this.doSomething(event,name);
    this.product=this.Cardservice.product;
   console.log(this.product[0]);
  }

}
