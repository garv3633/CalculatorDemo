import { Component, OnInit, Output } from '@angular/core';
import { CalculatorService } from '../services/calculator-service.service';
import { Result } from '../models/result.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  @Output()
  results: Result[] = []

  answer="";
  error:string;
  
  constructor(private calcService: CalculatorService) { }

  ngOnInit() {  }

  evaluate(exp){
    this.error=null;
    let res : Result ={
      expr : exp,
      precision: 0,
      ans: "",
      time: Date.now() 
    };
    this.calcService.getResult(res)
        .subscribe(
          result=>{
            res.ans = result["result"];
            this.answer = res.ans;
            this.results.unshift(res);
      },
      error=>{
        if(error.status==400){
          this.error= error.error.error
        }
        else{
          this.error ="Something Went Wrong"
        }
      });
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

  singleResult($event){
    this.answer = $event;
  }
}
