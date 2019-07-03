import { Component, OnInit } from '@angular/core';
import { DBService } from '../Services/dbservice.service';
import { Router } from '@angular/router';
import { states } from '../Models/state.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private apiService:DBService, private _router:Router) { }
  states = states;
  detail= {};
  ngOnInit() {
    this.apiService.getEmployeeDetails(window.localStorage.getItem("_id"))
      .subscribe(
        result=> this.detail = result
      )
  }

  onEdit(viewForm) {
    this.apiService.edit(viewForm.value, this.detail['id'])
      .subscribe(
        success => {
          console.log(success)
          this._router.navigateByUrl("home")
        },
        error => {
          console.log(error)
          window.alert("something went Wrong!!")
        }
      )
  }
}
