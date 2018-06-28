import { Component, Input } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  onActivate(event){
    window.scroll(0,0)
  }
  //pageName = 'Mobile Store';
  
}                                                         
