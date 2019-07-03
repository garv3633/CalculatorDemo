import { Component, OnInit } from '@angular/core';
import { DBService } from '../Services/dbservice.service';
import { Router } from '@angular/router';
import { states } from '../Models/state.model';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  states = states;
  constructor(private apiService:DBService, private _router:Router, private _storage:StorageService) { }

  ngOnInit() {
  }

  onRegister(registerForm){
    this.apiService.register(registerForm.value)
                    .subscribe(
                      success=>{
                        if(!window.localStorage.getItem('_id'))
                        this._storage.onStorage('login',success)
                        this._router.navigateByUrl("/home")
                      },
                      error=>{
                        console.log(error);
                        window.alert("error occured")
                      }
                    )
  }
}
