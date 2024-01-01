import { Injectable } from '@angular/core';
import { 
  Auth, 
  GoogleAuthProvider, 
  UserCredential, 
  signInWithPopup, 
  signOut, 
  User 
} from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  authStateChanged = this.isLoggedInSubject.asObservable();
  private currentUser: User | null = null;

  constructor(private readonly auth: Auth) {
    this.isLoggedInSubject.next(this.isUserLoggedIn());
  }

  GoogleAuth() {
    const provider = new GoogleAuthProvider();
    return this.AuthLogin(provider);
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  AuthLogin(provider: GoogleAuthProvider) {
    return signInWithPopup(this.auth, provider)
      .then((result: UserCredential) => {
        this.isLoggedInSubject.next(true);
        this.currentUser = result.user;
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      })
      .catch(() => {
        this.isLoggedInSubject.next(false);
        this.currentUser = null;
      });
  }

  logOut() {
    localStorage.removeItem('currentUser');

    return signOut(this.auth)
      .then(() => {
        this.isLoggedInSubject.next(false);
      })
      .catch((error) => {
        console.error('Error during logout:', error);
      });
  }

  isUserLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }
}