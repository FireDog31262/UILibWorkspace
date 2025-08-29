import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UILib } from '../../../uilib/src/lib/uilib';
import { Button } from '../../../uilib/src/lib/button/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UILib, Button],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UILib Demo');
  protected readonly clickCount = signal(0);

  onButtonClick() {
    this.clickCount.update(count => count + 1);
  }

  resetCounter() {
    this.clickCount.set(0);
  }
}
