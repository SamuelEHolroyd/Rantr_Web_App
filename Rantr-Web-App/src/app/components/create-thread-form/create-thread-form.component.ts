import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-create-thread-form',
  templateUrl: './create-thread-form.component.html',
  styleUrls: ['./create-thread-form.component.css'],
})
export class CreateThreadFormComponent {
  imageFile: File | null = null;
  loggedIn = false;

  constructor(
    private storage: AngularFireStorage,
    private firestore: AngularFirestore,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe((user) => {
      this.loggedIn = !!user;
      if (!this.loggedIn) {
        alert('Please log in to create a post.');
        this.router.navigate(['/login']);
      }
    });
  }

  onFileSelected(event: any): void {
    this.imageFile = event.target.files[0];
  }

  async getUsername(userId: string): Promise<string> {
    const userDocSnap = await firstValueFrom(this.firestore.collection('users').doc(userId).get());
    if (userDocSnap.exists) {
      return (userDocSnap.data() as any).username;
    } else {
      return 'Anonymous';
    }
  }


  async onSubmit(postText: string, event: Event) {
    event.preventDefault();

    if (!this.imageFile) {
      alert('Please select an image to upload.');
      return;
    }

    const user = await this.afAuth.currentUser;
    if (!user) {
      alert('User not found.');
      return;
    }
    const userId = user.uid;
    const username = await this.getUsername(userId);

    const filePath = `images/${new Date().getTime()}_${this.imageFile.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, this.imageFile);

    const uploadAndStoreData = async () => {
      return new Promise<void>(async (resolve) => {
        task.snapshotChanges()
          .pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe(async (imageUrl: string) => {
                await this.firestore.collection('posts').add({
                  postText: postText,
                  postImg: imageUrl,
                  timestamp: new Date(),
                  userId: userId,
                  username: username,
                });
                await this.router.navigate(['/my-threads']);
                resolve();
              });
            })
          )
          .subscribe();
      });
    };

    await uploadAndStoreData();
  }
}
