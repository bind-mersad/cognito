import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  async loginWithCognito(){
    try{
      let user = await Auth.signIn(this.email.toString(), this.password.toString());
      console.log('Authentication preformerd for user = ' + this.email + 'password ' + this.password + ' login result== ' + user);
      let tokens = user.signInUserSession;
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
