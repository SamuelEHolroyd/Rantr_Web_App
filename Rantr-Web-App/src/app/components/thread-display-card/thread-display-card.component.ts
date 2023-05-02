
import { Component, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-thread-display-card',
  templateUrl: './thread-display-card.component.html',
  styleUrls: ['./thread-display-card.component.css']
})
export class ThreadDisplayCardComponent {
  @Input() post: any;

  constructor(private firestore: AngularFirestore,private afAuth: AngularFireAuth) {}


  public updateCountThumbUp(id:string) {
    this.post.countThumbUp += 1;
    this.firestore.collection('posts').doc(id).update({countThumbUp: this.post.countThumbUp});
  }
  public updateCountThumbDown(id:string) {
    this.post.countThumbDown += 1;
    this.firestore.collection('posts').doc(id).update({countThumbDown: this.post.countThumbDown});
  }
  public updateCountSmile(id:string) {
    this.post.countSmile += 1;
    this.firestore.collection('posts').doc(id).update({countSmile: this.post.countSmile});
  }
  public updateCountStraight(id:string) {
    this.post.countStraight += 1;
    this.firestore.collection('posts').doc(id).update({countStraight: this.post.countStraight});
  }
  public updateCountLaugh(id:string) {
    this.post.countLaugh += 1;
    this.firestore.collection('posts').doc(id).update({countLaugh: this.post.countLaugh});
  }
  public updateCountQuestion(id:string) {
    this.post.countQuestion += 1;
    this.firestore.collection('posts').doc(id).update({countQuestion: this.post.countQuestion});
  }
  public updateCountHeart(id:string) {
    this.post.countHeart += 1;
    this.firestore.collection('posts').doc(id).update({countHeart: this.post.countHeart});
  }

  public async deletePost(id:string){
    const user = await this.afAuth.currentUser;
    if (!user) {
      alert('User not found.');
      return;
    }
    const userId = user.uid;
    if(userId==this.post.userId) {
      this.firestore.collection('posts').doc(id).delete();
    }
    else{
      alert('You do not have the authorization to remove this post.');
    }
  }
}
