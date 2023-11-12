import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, UserCredential, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly auth: Auth) {}

  GoogleAuth() {
    const provider = new GoogleAuthProvider();
    return this.AuthLogin(provider);
  }

  AuthLogin(provider: GoogleAuthProvider) {
    return signInWithPopup(this.auth, provider)
      .then((result: UserCredential) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}