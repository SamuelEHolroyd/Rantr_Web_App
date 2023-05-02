import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-settings-navbar',
  templateUrl: './settings-navbar.component.html',
  styleUrls: ['./settings-navbar.component.css']
})
export class SettingsNavbarComponent implements OnInit {
  username = '';

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  async ngOnInit() {
    const user = await this.afAuth.currentUser;
    if (user) {
      const userDoc = this.firestore.doc(`users/${user.uid}`);
      userDoc.valueChanges().subscribe((userData: any) => {
        if (userData) {
          this.username = userData.username;
        }
      });
    }
  }
}
