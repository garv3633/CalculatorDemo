import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/result.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CalculatorService } from 'src/app/services/calculator-service.service';

@Component({
  selector: 'app-calculator-old',
  templateUrl: './calculator-old.component.html',
  styleUrls: ['./calculator-old.component.css']
})
export class CalculatorOldComponent implements OnInit {

  results:Result[] = [];
  calcForm:FormGroup;
  constructor(private fb:FormBuilder, private calculatorService:CalculatorService) { }

  ngOnInit() {
    this.calcForm = this.fb.group({
      firstOperand : [],
      operator : [],
      secondOperand : []
    })
  }

  evaluate(){
    let expr: string = this.calcForm.value['firstOperand']+this.calcForm.value['operator']+this.calcForm.value['secondOperand'];
    let res : Result = {
      expr : expr,
      precision : 0,
      ans : "",
      time : Date.now()
    }
    this.calculatorService.getResult(res)
              .subscribe(
                result=>{
                  res.ans = result['result'];
                  this.results.unshift(res)
                })
  }

}
