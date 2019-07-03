import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DBService } from '../Services/dbservice.service';
import { states } from '../Models/state.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: DBService, private _router: Router) { }
  id: number;
  detail = {};
  states = states;
  ngOnInit() {
    this.route.params.subscribe(params => { this.id = params['id'] })
    this.apiService.getEmployeeDetails(this.id)
      .subscribe(
        result => {
          console.log(result)
          this.detail = result
        }
      )
  }

  onEdit(viewForm) {
    this.apiService.edit(viewForm.value, this.id)
      .subscribe(
        success => {
          this._router.navigateByUrl("/home")
        },
        error => {
          console.log(error)
          window.alert("something went Wrong!!")
        }
      )
  }

  onDelete(id){
    this.apiService.delete(id)
      .subscribe(
        success=>{
          this._router.navigate(['/home'])
        }
      )
  }
}
