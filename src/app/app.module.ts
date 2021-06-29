import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CounterComponent } from './counter/counter.component';
import { HighlightDirective } from './highlight.directive';
import { DirectiveTestingComponent } from './directive-testing/directive-testing.component';
import { ApiTestComponent } from './api-test/api-test.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'directive', component: DirectiveTestingComponent },
      { path: 'api-test', component: ApiTestComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    CounterComponent,
    HighlightDirective,
    DirectiveTestingComponent,
    ApiTestComponent,
  ],
  bootstrap: [AppComponent],
  providers: [CartService]
})
export class AppModule {}
