import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut} from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private fireAuth: Auth) { }
  async register({ email, password }) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.fireAuth,
        email,
        password
      );
      return user;
    } catch (e) {
      return null;
    }
  }
 
  async login({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(this.fireAuth, email, password);
      return user;
    } catch (e) {
      return null;
    }
  }
 
  logout() {
    return signOut(this.fireAuth);
  }
 
    
  
}
