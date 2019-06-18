import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorOldComponent } from './calculator/calculator-old/calculator-old.component';

const routes: Routes = [
  {path:"", component: CalculatorComponent},
  {path:"calculator", component: CalculatorOldComponent},
  {path:"calculator2", component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
