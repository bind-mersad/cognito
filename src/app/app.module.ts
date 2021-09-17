import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import Amplify, { Auth } from 'aws-amplify';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SecretPageComponent } from './secret-page/secret-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';

Amplify.configure({
  Auth:{
    mandatorySignIn: true,
    region: 'us-east-1',
    userPoolId: 'us-east-1_JFouBKIQx',
    userPoolWebClientId: '6k8vje4g0vajtn4mcb7tvgbhhb',
    authenticationFlowType: 'USER_PASSWORD_AUTH'
  }
})

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SecretPageComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
