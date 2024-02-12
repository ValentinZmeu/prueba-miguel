import { Injectable } from '@angular/core';
import { EndpointsListComponent } from '../components/endpoints/endpoints-list/endpoints-list.component';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  roles: string[] = ['Basic', 'Admin'];
  userRole: string = 'Basic';

  constructor() {

  }

  setUserRole(role: string) {
    this.userRole = role;
  }
}
