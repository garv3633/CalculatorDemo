import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DBService } from './dbservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private apiService:DBService,private _router:Router) { }

  canActivate() {
    if (this.apiService.isLoggedIn()){
      return true;
    }
    else {
      window.alert("You don't have permission to view this page");
      this._router.navigate(['/login'])
      return false;
    }
  }

}
