import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
// import {MaterialModule} from ''
import {MatDatepickerModule} from '@angular/material'
import {MatNativeDateModule} from '@angular/material'
import { DataComponent } from './data/data.component'
import {routing} from './app.routes'
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DataComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    routing,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
