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
  // Create variables to store current user information 
  email = '';
  username = '';

  // Create variables to store updated user information
  newEmail = '';
  newUsername = '';
  password = '';
  showPassword = false;

  // Constructor for the component that takes AngularFirestore, AngularFireAuth, and Router as dependencies
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private router: Router) {
    this.getUserData();
  }

  // Gets the users current profile information
  async getUserData() {

    // Gets the current user
    const user = await this.afAuth.currentUser;

    // Check if the user is logged in
    if (user) {
      // Get the document where the users information is stored in the Firestore
      const userDoc = this.firestore.doc(`users/${user.uid}`);
      userDoc.valueChanges().subscribe((userData: any) => {
        if (userData) {
          // Set the email and username variable as the user's current email and username stored
          this.email = userData.email;
          this.username = userData.username;
        }
      });
    }
  }

  // Changes the boolean value for showPassword variable
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  // Stores the updated user information in the Firestore
  async updateUserInfo() {
    // Get the current user
    const user = await this.afAuth.currentUser;

    // Check if the user is logged in 
    if (!user) {
      alert('User not found');
      return;
    }
    // Get the document where the users information is stored in the Firestore
    const userDoc = this.firestore.doc(`users/${user.uid}`);

    // Check if email entered into form is the same as the user's current email stored
    // If not update the users email in the Firestore 
    if (this.newEmail && this.newEmail !== user.email) {
      await user.updateEmail(this.newEmail);
      await userDoc.set({ email: this.newEmail }, { merge: true });
    }
    
    // Check if username entered into form is the same as the user's current username stored
    // If not update the user's username in the Firestore 
    if (this.newUsername && this.newUsername !== user.displayName) {
      await user.updateProfile({ displayName: this.newUsername });
      await userDoc.set({ username: this.newUsername }, { merge: true });
    }

    // Update the users password to the password entered in form
    if (this.password) {
      await user.updatePassword(this.password);
    }

    // Route the user back to the sign in page to sign back in with updated account information
    const navigationExtras: NavigationExtras = { state: { accountDetailsChanged: true } };
    this.router.navigate([''], navigationExtras);
  }
}


