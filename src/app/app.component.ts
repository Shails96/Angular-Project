import { Component } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import {GoogleLoginProvider} from 'angularx-social-login';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-app';
  users : any = [];

  constructor(private socialAuthService: SocialAuthService){

  }

  loginWithGoogle(): void {
      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
        .then(() => console.log("Logged in"));
    }
  // () => {}
}
