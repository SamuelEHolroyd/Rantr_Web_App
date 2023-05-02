import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recommended-threads-layout',
  templateUrl: './recommended-threads-layout.component.html',
  styleUrls: ['./recommended-threads-layout.component.css']
})
export class RecommendedThreadsLayoutComponent {
  userPosts!: Observable<any[]>;

  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  async ngOnInit() {
    const user = await this.afAuth.currentUser;
    if (user) {
      this.userPosts = this.firestore.collection('posts').snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
    }
  }
}
