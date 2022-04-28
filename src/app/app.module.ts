import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import  localeEs  from "@angular/common/locales/es-AR";
import { registerLocaleData } from '@angular/common';



registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AppComponent,
    
   
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {
      provide:LOCALE_ID,useValue:'es-AR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
