import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component'; // ✅ Импортируем компонент

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent // ✅ Добавляем компонент
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
