import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: "app-login-button",
  template: '<button (click)="login()">Log in</button>',
  styles: [
    "font-family: sans-serif;"
  ]
})
export class LoginButton { 

  constructor(public auth: AuthService) {}
  
  login() {
    this.auth.loginWithRedirect();
  }
}