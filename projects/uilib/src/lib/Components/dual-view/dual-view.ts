import { Component } from '@angular/core';

@Component({
  selector: 'dual-view',
  templateUrl: './dual-view.html',
  styleUrls: ['./dual-view.css']
})
export class DualViewComponent {
  detailsOpen = true;

  toggleDetails() {
    this.detailsOpen = !this.detailsOpen;
  }

  get parentHeight(): string {
    return this.detailsOpen ? 'calc(50% - 35px)' : 'calc(100% - 55px)';
  }

  get detailsHeight(): string {
    return this.detailsOpen ? 'calc(50% - 35px)' : '0px';
  }
}
