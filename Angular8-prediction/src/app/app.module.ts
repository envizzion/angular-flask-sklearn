import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { LoginComponent } from './components/login/login.component';
import { ViewPredictionComponent } from './components/view-prediction/view-prediction.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";  
@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    LoginComponent,
    ViewPredictionComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
