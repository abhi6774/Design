import { DOCUMENT } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: "logout-button",
  template: `<button (click)="logout()">Logout</button>`
})
export class LogoutButton {
  constructor(@Inject(DOCUMENT) public document: Document,
  private auth: AuthService) { }
  
  logout() {
    this.auth.logout({
      returnTo: this.document.location.origin
    })
  }
}