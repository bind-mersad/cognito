import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  username: string = '';
  email: string = '';
  password: string = '';
  givenName: string = '';
  familyName: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async register(){
    try{
      const user = await Auth.signUp({
        username: this.username,
        password: this.password,
        attributes: {
          email: this.email,
          given_name: this.givenName,
          family_name: this.familyName
        }
      });
      console.log(user);
      alert('User signup completed, please check verify your email');
      this.router.navigate(['login']);
    } catch(error){
      console.log('Error signing up', error);
    }
  }

}
