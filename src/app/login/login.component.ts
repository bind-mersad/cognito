import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, Hub } from 'aws-amplify';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router, private zone: NgZone) { 
    Hub.listen('auth', ({ payload: { event } }) => {
      if (event === 'cognitoHostedUI' || event === 'signedIn') {
        this.zone.run(() => this.router.navigate(['/home']));
      }
    });

    Auth.currentAuthenticatedUser()
      .then(() => {
        this.router.navigate(['/home'], { replaceUrl: true });
      }).catch((err) => {
        console.log(err);
      })
   }

  async loginWithCognito(){
    try{
      let user = await Auth.signIn(this.email.toString(), this.password.toString());
      console.log('Authentication preformerd for user = ' + this.email + ' password ' + this.password + ' login result== ' + JSON.stringify(user));
      const tokens = user.signInUserSession;
      if (tokens != null){
        console.log('User authenticated');
        this.router.navigate(['home']);
        alert('You are logged in successfully !')
      }
    } catch(error) {
      console.log(error);
      alert('User authentication failed');
    }
  }

}
