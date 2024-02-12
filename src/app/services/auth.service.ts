import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  roles: string[] = ['Basic', 'Admin'];
  userRole: string = 'Basic';

  constructor() {

  }
}
