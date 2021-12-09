import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProduitComponent } from './produit/produit.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    FournisseurComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
