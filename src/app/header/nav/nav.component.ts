import { Component, OnInit } from '@angular/core';
import {start,start1,start2,start3} from '../../_animations/animation'
import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  animations: [start,start1,start2,start3],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
state:string='go';
state1:string="go1";
imgSrc="../../../assets/images/menu.png";
  constructor() { }

div1;
close;
flag:boolean=true;
  ngOnInit() {


// menu open and close

$(document).ready(function(){
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
  });
  $('#sabMenuId').click(function(){
    $('#nav-icon').toggleClass('open')
  })
});

// end


    window.scrollBy(0, 1); //position fixed  միշտ  չի որ  աշխատում   է  դրա  համար գրում ենք դա




this.div1=document.getElementById("sabmenuP");
this.close=document.getElementById("close");
  }

  startAnime(){
    if(this.flag){
    this.state='togo';
    this.state1="togo1";
 this.imgSrc="../../../assets/images/cancel-music.png";
  this.div1.style.display="block";
  this.close.style.display="block";
    }

else{
  this.imgSrc="../../../assets/images/menu.png";
  this.state='go';
  this.state1='go1';
  
 this.close.style.display="none";
 this.none();
 
//  this.div1.style.display="none";
}
this.flag=!this.flag;
  }


  none(){setTimeout(()=>{
  if(this.flag)
  this.div1.style.display="none"; }, 
800
  )}
  

}
