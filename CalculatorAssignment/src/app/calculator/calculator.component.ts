import { Component, OnInit, Input, Output } from '@angular/core';
import { CalculatorService } from '../services/calculator-service.service';
import { Result } from '../models/result.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  @Output('resultsArr')
  results: Result[] = []

  answer="";
  error:string;
  
  constructor(private calcService: CalculatorService) { }

  ngOnInit() {  }

  evaluate(exp){
    console.log("enter pressed " + exp + "prec = ");
    let resu : Result ={
      expr : "",
      precision: 0,
      ans: ""
    };
    resu.expr = exp
    this.calcService.getResult(resu)
        .subscribe(
          result=>{
            resu.ans = result["result"];
            this.answer = resu.ans;
            this.results.unshift(resu);
      },
      error=>{
        console.log(error)
        if(error.status==400)
        {this.error="Wrong expression"}
        else{
          this.error ="Something Went Wrong"
        }
      });
    // this.results.unshift(this.res);
  }

  pressBtn($event){
    console.log($event.path[0].textContent);
    this.answer += $event.path[0].textContent;
    
  }

  clear(){
    this.answer="";
  }

  back(){
    this.answer = this.answer.slice(0,this.answer.length-1);
  }
}
