import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AuthService from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth
  }

  async onSignIn() {

    try {
      await this.authService.signIn()
      this.router.navigate(['/appareils'])
      this.authStatus = this.authService.isAuth
      
    } catch(err) {
      console.log('errr', err)
    }
  }

  onSignOut() {

    this.authService.signOut()
    this.authStatus = this.authService.isAuth
  }

}
