import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-create-thread-form',
  templateUrl: './create-thread-form.component.html',
  styleUrls: ['./create-thread-form.component.css'],
})
export class CreateThreadFormComponent {
  imageFile: File | null = null;

  constructor(
    private storage: AngularFireStorage,
    private firestore: AngularFirestore,
    private router: Router
  ) {
  }

  onFileSelected(event: any): void {
    this.imageFile = event.target.files[0];
  }

  async onSubmit(postText: string, event: Event) {
    event.preventDefault(); // Add this line to prevent form submission from refreshing the page

    if (!this.imageFile) {
      alert('Please select an image to upload.');
      return;
    }

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
