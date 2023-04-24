import { Component } from '@angular/core';

@Component({
  selector: 'app-thread-card',
  templateUrl: './thread-card.component.html',
  styleUrls: ['./thread-card.component.css']
})
export class ThreadCardComponent {
  count: number=0;
  private isCounted: boolean=false;
  public updateCount() {
    this.count += this.isCounted? -1: 1;
    this.isCounted = !this.isCounted;
  }
}
