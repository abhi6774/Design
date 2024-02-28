import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';
import { LoginButton } from './components/login-button';
import { LogoutButton } from './components/logout-button';
import { HomeComponent } from './home/home.component';
import { LearningComponent } from './learning/learning.component';
import { GreatComponent } from './great/great.component';

@NgModule({
  declarations: [
    AppComponent,
    LearningComponent,
    HomeComponent,
    LoginButton,
    LogoutButton,
    GreatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: "dev-9lj3u2mo.us.auth0.com",
      clientId: "yrcUKZeEes4I25ImU36hFH9ZmBDYCi6q"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // console.log(this.imports);
    
  }
}
