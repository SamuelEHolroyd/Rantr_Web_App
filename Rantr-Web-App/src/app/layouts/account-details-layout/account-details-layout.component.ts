import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router, NavigationExtras } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-account-details-layout',
  templateUrl: './account-details-layout.component.html',
  styleUrls: ['./account-details-layout.component.css']
})
export class AccountDetailsLayoutComponent {
  email = '';
  username = '';
  newEmail = '';
  newUsername = '';
  password = '';
  showPassword = false;

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private router: Router) {
    this.getUserData();
  }

  async getUserData() {
    const user = await this.afAuth.currentUser;

    if (user) {
      const userDoc = this.firestore.doc(`users/${user.uid}`);
      userDoc.valueChanges().subscribe((userData: any) => {
        if (userData) {
          this.email = userData.email;
          this.username = userData.username;
        }
      });
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  async updateUserInfo() {
    const user = await this.afAuth.currentUser;
    if (!user) {
      alert('User not found');
      return;
    }

    const userDoc = this.firestore.doc(`users/${user.uid}`);

    if (this.newEmail && this.newEmail !== user.email) {
      await user.updateEmail(this.newEmail);
      await userDoc.set({ email: this.newEmail }, { merge: true });
    }

    if (this.newUsername && this.newUsername !== user.displayName) {
      await user.updateProfile({ displayName: this.newUsername });
      await userDoc.set({ username: this.newUsername }, { merge: true });
    }

    if (this.password) {
      await user.updatePassword(this.password);
    }

    const navigationExtras: NavigationExtras = { state: { accountDetailsChanged: true } };
    this.router.navigate([''], navigationExtras);
  }
}


