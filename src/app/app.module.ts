import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CompetencesComponent } from './components/competences/competences.component';
import { ItemCompetenceComponent } from './components/item-competence/item-competence.component';
import { ButtonComponent } from './components/button/button.component';
import { AddCompetenceComponent } from './components/add-competence/add-competence.component';


@NgModule({
  declarations: [
    AppComponent,
    CompetencesComponent,
    ItemCompetenceComponent,
    ButtonComponent,
    AddCompetenceComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
