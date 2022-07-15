import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeIdeeComponent } from './components/liste-idee/liste-idee.component';
import { AjouterIdeeComponent } from './components/ajouter-idee/ajouter-idee.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FiltreIdeeComponent } from './components/filtre-idee/filtre-idee.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeIdeeComponent,
    AjouterIdeeComponent,
    FiltreIdeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
