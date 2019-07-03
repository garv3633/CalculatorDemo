import { Component, OnInit, Input } from '@angular/core';
import { DBService } from '../Services/dbservice.service';
import { Router } from '@angular/router';
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private apiService: DBService, private _router: Router,private _storage:StorageService) { }

  ngOnInit() {
    this._storage.onStorage("logout")
  }

  onLogin(loginForm) {
    this.apiService.login(loginForm.value)
      .subscribe(
        response => {
          console.log(response);
          
          if (response['length']!=0) {
            this._storage.onStorage("login",response[0])
            this._router.navigateByUrl("home")
          }
          else {
            window.alert("username/password error")
          }
        },
        error => {
          console.log(error)
          window.alert("Something Went wrong!!try later")
        }
      )
  }
}
