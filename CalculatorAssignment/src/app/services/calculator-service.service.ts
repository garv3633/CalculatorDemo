import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../models/result.model';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  apiURL = "http://api.mathjs.org/v4/";

  constructor(private http:HttpClient) { }

  getResult(expr : Result){
    return this.http.post(this.apiURL,expr)
  }
}
