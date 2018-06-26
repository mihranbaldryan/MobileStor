import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './header/slider/slider.component';
import { ArticleComponent } from './article/article.component';
import { SectionsComponent } from './article/sections/sections.component';
import { Section1Component } from './article/sections/section1/section1.component';
import { Section2Component } from './article/sections/section2/section2.component';
import { Section3Component } from './article/sections/section3/section3.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductAddComponent } from './product-add/product-add.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SliderComponent,
    ArticleComponent,
    SectionsComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    ProductCardComponent,
    ProductPageComponent,
    ProductAddComponent,

  ],
  imports: [
    BrowserModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
