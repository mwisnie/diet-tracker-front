import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './app.reducer';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AboutComponent } from './components/about/about.component';
import { AccountComponent } from './components/account/account.component';
import { DietComponent } from './components/diet/diet.component';
import { ProductsComponent } from './components/products/products.component';
import { StatsComponent } from './components/stats/stats.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { SharedModule } from './shared/shared.module';
import { UIService } from './shared/ui.service';
import { TestComponent } from './test/test.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    AboutComponent,
    ProductsComponent,
    StatsComponent,
    AccountComponent,
    DietComponent,
    StatsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SharedModule,
    AuthModule,
  ],
  providers: [
    AuthService,
    UIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
