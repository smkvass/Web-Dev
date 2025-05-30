import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent], 
  imports: [BrowserModule, HttpClientModule], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

