import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-threads-layout',
  templateUrl: './my-threads-layout.component.html',
  styleUrls: ['./my-threads-layout.component.css']
})
export class MyThreadsLayoutComponent implements OnInit {
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

    // If the user is logged in, retrives the current user's posts from the Firestore
    // Matches the current user's Id with the user Id stored when the post was created
    if (user) {
      this.userPosts = this.firestore.collection('posts', ref => ref.where('userId', '==', user.uid).orderBy('timestamp', 'desc')).valueChanges();
    }
  }
}
