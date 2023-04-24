import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.css'],
})
export class CreateAccountFormComponent {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async createAccount(
    email: string,
    username: string,
    password: string,
    confirmPassword: string
  ) {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (result.user) {
        await result.user.updateProfile({ displayName: username });
      }
      this.router.navigate(['/signin']);
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  }
}
