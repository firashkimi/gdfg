import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {path:"client",component:ClientComponent},
  {path:"",component:ProduitComponent},
  {path:"fournisseur",component:FournisseurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
