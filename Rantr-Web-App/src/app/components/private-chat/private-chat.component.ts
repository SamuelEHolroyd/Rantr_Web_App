
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


@Component({
  selector: 'app-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.css']
})
export class PrivateChatComponent implements OnInit {
  users: any[] = [];
  currentUserUid: string | null = null;
  selectedChat: any;
  messages: any[] = [];
  newMessageContent: string = '';

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  async ngOnInit() {
    const user = await this.afAuth.currentUser;
    if (user) {
      this.currentUserUid = user.uid;
      console.log('Logged in user:', this.currentUserUid);
    } else {
      console.log('No logged in user found.');
    }
    this.loadUsers();
  }

  async loadUsers() {
    this.firestore.collection('users').valueChanges({idField: 'uid'}).subscribe((users: any[]) => {
      this.users = users.filter(u => u.uid !== this.currentUserUid);
      console.log('Fetched users:', this.users);
    });
  }



  private generateChatId(uid1: string, uid2: string): string {
    return uid1 < uid2 ? `${uid1}_${uid2}` : `${uid2}_${uid1}`;
  }

  async selectChat(user: any): Promise<void> {
    if (!this.currentUserUid) {
      return;
    }

    const chatId = this.generateChatId(this.currentUserUid, user.uid);
    this.selectedChat = user;
    await this.firestore
      .collection('privateChats')
      .doc(chatId)
      .valueChanges()
      .subscribe((chatData: any) => {
        if (chatData && chatData.messages) {
          this.messages = chatData.messages;
        } else {
          this.messages = [];
        }
      });
  }

  closeChat(): void {
    this.selectedChat = null;
  }

  async sendMessage(): Promise<void> {
    if (!this.currentUserUid || !this.selectedChat) {
      return;
    }

    const message = {
      sender: this.currentUserUid,
      content: this.newMessageContent,
      timestamp: new Date().toISOString()
    };

    const chatId = this.generateChatId(this.currentUserUid, this.selectedChat.uid);
    await this.firestore
      .collection('privateChats')
      .doc(chatId)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion(message)
      });

    this.newMessageContent = '';
  }
}

