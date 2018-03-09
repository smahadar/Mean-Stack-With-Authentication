import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate  {

    constructor(private authService: AuthService, private router: Router) {

    }
    canActivate() {
        if(this.authService.loggedIn()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
      }
}