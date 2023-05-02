import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-my-threads-layout',
  templateUrl: './my-threads-layout.component.html',
  styleUrls: ['./my-threads-layout.component.css']
})
export class MyThreadsLayoutComponent implements OnInit {
  userPosts!: Observable<any[]>;

  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  async ngOnInit() {
    const user = await this.afAuth.currentUser;
    if (user) {
      this.userPosts = this.firestore.collection('posts', ref => ref.where('userId', '==', user.uid))
        .snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        );
    }
  }
}

