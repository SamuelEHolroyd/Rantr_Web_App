import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent {
  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }

  async signIn(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/profile']);
    } catch (error: any) {
      // Display an error message if the user is not found
      if (error.code === 'auth/user-not-found') {
        alert('User not found. Please check your credentials and try again.');
      } else {
        alert(`Error: ${error.message}`);
      }
    }
  }
}
