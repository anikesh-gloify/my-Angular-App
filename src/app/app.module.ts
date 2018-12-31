import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponentComponent } from './component/form-component/form-component.component';

import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './component/home/home.component'
import { LazyScrollComponent } from './component/lazy-scroll/lazy-scroll.component'

/*Lazy scroll*/
import { DeferLoadModule } from '@trademe/ng-defer-load';

import { LazyLoadImagesModule } from 'ngx-lazy-load-images';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    HomeComponent,
    LazyScrollComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    LazyLoadImagesModule,
    DeferLoadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
