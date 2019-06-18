import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './calculator/result/result.component';
import { CalculatorOldComponent } from './calculator/calculator-old/calculator-old.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalculatorComponent,
    ResultComponent,
    CalculatorOldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
