import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../Services/storage.service';
import { LoginComponent } from '../login/login.component';
import { DBService } from '../Services/dbservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  is_admin: boolean;
  name: string;
  constructor(private _router: Router, private _storage: StorageService) { }

  ngOnInit() {
    this.is_admin = (window.localStorage.getItem("_admin") == 'true')
    this.name = window.localStorage.getItem("_name")
    this._router.navigateByUrl("home")
  }

  onLogout() {
    this._storage.onStorage("logout")
    this._router.navigateByUrl("/login")
  }
}
