import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { FooterComponent } from './footer/footer.component';
import { RouterModule , Routes} from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { TrendComponent } from './trend/trend.component';
import { AboutComponent } from './about/about.component';

const appRoutes:Routes=[

  {
    path:'',
    component: ArticleComponent
  },
  {
    path: 'trend',
    component: TrendComponent
  },
  {
    path:'mobile',
    component: Section1Component
  },
  {
    path:'tablet',
    component: Section2Component
  },
  {
    path:'accessories',
    component: Section3Component
  },
  {
    path:'product/:any',
    component:ProductPageComponent
  },
  /*
  {
    path: 'product/mobile/:any',
    component: MobileComponent
  },
  {
    path: 'product/tablet/:any',
    component: TabletComponent
  },
  {
    path: 'product/accessories/:any',
    component: AccessoriesComponent
  },
  */
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  }

]


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
    FooterComponent,
    ContactsComponent,
    TrendComponent,
    AboutComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes), 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
