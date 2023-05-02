
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thread-display-card',
  templateUrl: './thread-display-card.component.html',
  styleUrls: ['./thread-display-card.component.css']
})
export class ThreadDisplayCardComponent {
  @Input() post: any;
  countThumbUp: number = 0;
  countThumbDown: number = 0;
  countSmile: number = 0;
  countStraight: number = 0;
  countLaugh: number = 0;
  countQuestion: number = 0;
  countHeart: number = 0;

  private isCountedThumbUp: boolean = false;
  private isCountedThumbDown: boolean = false;
  private isCountedSmile: boolean = false;
  private isCountedStraight: boolean = false;
  private isCountedLaugh: boolean = false;
  private isCountedQuestion: boolean = false;
  private isCountedHeart: boolean = false;

  public updateCountThumbUp() {
    this.countThumbUp += this.isCountedThumbUp ? -1 : 1;
    this.isCountedThumbUp = !this.isCountedThumbUp;
  }

  public updateCountThumbDown() {
    this.countThumbDown += this.isCountedThumbDown ? -1 : 1;
    this.isCountedThumbDown = !this.isCountedThumbDown;
  }

  public updateCountSmile() {
    this.countSmile += this.isCountedSmile ? -1 : 1;
    this.isCountedSmile = !this.isCountedSmile;
  }

  public updateCountStraight() {
    this.countStraight += this.isCountedStraight ? -1 : 1;
    this.isCountedStraight = !this.isCountedStraight;
  }

  public updateCountLaugh() {
    this.countLaugh += this.isCountedLaugh ? -1 : 1;
    this.isCountedLaugh = !this.isCountedLaugh;
  }

  public updateCountQuestion() {
    this.countQuestion += this.isCountedQuestion ? -1 : 1;
    this.isCountedQuestion = !this.isCountedQuestion;
  }

  public updateCountHeart() {
    this.countHeart += this.isCountedHeart ? -1 : 1;
    this.isCountedHeart = !this.isCountedHeart;
  }
}
