import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recommended-threads-layout',
  templateUrl: './recommended-threads-layout.component.html',
  styleUrls: ['./recommended-threads-layout.component.css']
})
export class RecommendedThreadsLayoutComponent {
  // Variable to store the user's posts that are retrived from the Firestore
  userPosts!: Observable<any[]>;

  // Constructor for the component that takes AngularFirestore and AngularFireAuth as dependencies
  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  async ngOnInit() {
    // Gets the current user
    const user = await this.afAuth.currentUser;

    // If the user is logged in, retrives all user's posts from the Firestore
    // These posts are ordered by most recent 
    if (user) {
      this.userPosts = this.firestore.collection('posts', ref => ref.orderBy('timestamp', 'desc')).valueChanges();
    }
  }
}
