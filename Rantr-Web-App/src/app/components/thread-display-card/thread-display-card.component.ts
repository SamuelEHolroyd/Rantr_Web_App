
import { Component, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-thread-display-card',
  templateUrl: './thread-display-card.component.html',
  styleUrls: ['./thread-display-card.component.css']
})
export class ThreadDisplayCardComponent {
 
  // Input to accept the post data
  @Input() post: any;

  // Constructor for the component that takes AngularFirestore and AngularFireAuth as dependencies
  constructor(private firestore: AngularFirestore,private afAuth: AngularFireAuth) {}

  // Updates the thumbs up reaction counter in the backend
  // id - The id number of the post being updated
  public updateCountThumbUp(id:string) {
    this.post.countThumbUp += 1;
    this.firestore.collection('posts').doc(id).update({countThumbUp: this.post.countThumbUp});
  }

  // Updates the thumbs down reaction counter in the backend
  // id - The id number of the post being updated
  public updateCountThumbDown(id:string) {
    this.post.countThumbDown += 1;
    this.firestore.collection('posts').doc(id).update({countThumbDown: this.post.countThumbDown});
  }

  // Updates the Smiling face reaction counter in the backend
  // id - The id number of the post being updated
  public updateCountSmile(id:string) {
    this.post.countSmile += 1;
    this.firestore.collection('posts').doc(id).update({countSmile: this.post.countSmile});
  }

  // Updates the straight face reaction counter in the backend
  // id - The id number of the post being updated
  public updateCountStraight(id:string) {
    this.post.countStraight += 1;
    this.firestore.collection('posts').doc(id).update({countStraight: this.post.countStraight});
  }

  // Updates the Laughing face reaction counter in the backend
  // id - The id number of the post being updated
  public updateCountLaugh(id:string) {
    this.post.countLaugh += 1;
    this.firestore.collection('posts').doc(id).update({countLaugh: this.post.countLaugh});
  }

  // Updates the questioning face reaction counter in the backend
  // id - The id number of the post being updated
  public updateCountQuestion(id:string) {
    this.post.countQuestion += 1;
    this.firestore.collection('posts').doc(id).update({countQuestion: this.post.countQuestion});
  }

  // Updates the heart eyes reaction counter in the backend
  // id - The id number of the post being updated
  public updateCountHeart(id:string) {
    this.post.countHeart += 1;
    this.firestore.collection('posts').doc(id).update({countHeart: this.post.countHeart});
  }

  // Deletes a post from the backend
  // Users can only delete posts they created
  // id - The id number of the post being updated
  public async deletePost(id:string){

    // Get the current user
    const user = await this.afAuth.currentUser;

    // Send the user an alert if the current user is not found
    if (!user) {
      alert('User not found.');
      return;
    }

    // Get the uid for the current user
    const userId = user.uid;

    // Check if the uid for the current user is the same user uid stored for the post
    if (userId==this.post.userId) {
      // If so, delete the post
      this.firestore.collection('posts').doc(id).delete();
    }
    // Else alert user that they are unable to delete the post
    else{
      alert('You do not have the authorization to remove this post.');
    }
  }
}
