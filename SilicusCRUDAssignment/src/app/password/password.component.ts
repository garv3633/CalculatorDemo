import { Component, OnInit } from '@angular/core';
import { DBService } from '../Services/dbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  detail = {};
  constructor(private apiService: DBService,private _router:Router) { }

  ngOnInit() {
    this.apiService.getEmployeeDetails(localStorage.getItem('_id'))
      .subscribe(
        result => {
          this.detail = result;
        }
      )
  }

  changePassword(f) {
    if (this.detail['password'] == f.value.old) {
      if (f.value.new == f.value.re) {
        this.apiService.edit({"password":f.value.new}, this.detail['id'])
          .subscribe(
            response => {
              this._router.navigateByUrl('/home');
              window.alert("Password changed successfully!!");
            },
            error => {
              console.log(error);
              window.alert("something went wrong !!");
            })
      }
      else {
        window.alert("Passwords donot match !!");
      }
    }
    else {
      window.alert("Wrong Password");
    }
  }

}
