import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AjouterIdeeComponent} from "./components/ajouter-idee/ajouter-idee.component";

const routes: Routes = [
  {path:"ajouter-idee",component:AjouterIdeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
