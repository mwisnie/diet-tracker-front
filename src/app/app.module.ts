import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { MaterialsModule } from './materials.module';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { ProductsComponent } from './components/products/products.component';
import { AccountComponent } from './components/account/account.component';
import { DietComponent } from './components/diet/diet.component';
import { StatsComponent } from './components/stats/stats.component';
import { AboutComponent } from './components/about/about.component';
import { AuthModule } from './auth/auth.module';
import { UIService } from './shared/ui.service';
import { TestComponent } from './test/test.component';
import { reducers } from './app.reducer';
import { StoreModule } from '@ngrx/store';

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MaterialsModule,
    FlexLayoutModule,
    AuthModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    AuthService,
    UIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
