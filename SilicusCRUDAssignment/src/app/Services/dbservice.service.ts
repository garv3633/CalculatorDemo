import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';


@Injectable({
  providedIn: 'root'
})
export class DBService {

  apiUrl= "http://localhost:3000/employees/"

  constructor(private http:HttpClient) { }

  login(login){
    return this.http.get(this.apiUrl,{params:{'user_name':login.username,'password':login.password}})
  }

  getEmployeeDetails(id){
    return this.http.get(this.apiUrl+id)
  }

  getAllEmployees(){
    return this.http.get(this.apiUrl)
  }

  register(userDetail){
    return this.http.post(this.apiUrl,userDetail)
  }

  edit(employee,id:number){
    return this.http.patch(this.apiUrl+id,employee)
  }

  delete(id){
    return this.http.delete(this.apiUrl+id)
  }

  isLoggedIn(){
    let token = localStorage.getItem('_id')

    if(!token)
        return false;

    return true;
  }
}
