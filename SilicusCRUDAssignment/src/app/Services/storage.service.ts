import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  onStorage(option: string, object?) {
    if (option == "login") {
      window.localStorage.setItem("_id", object.id)
      window.localStorage.setItem("_name", object.first_name)
      window.localStorage.setItem("_admin",object.is_admin)
    }
    if (option == "logout") {
      window.localStorage.removeItem("_name");
      localStorage.clear();
    }
  }
}
