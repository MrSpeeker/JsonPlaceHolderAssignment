import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JsonPlaceHolderComponent } from './features/json-place-holder/json-place-holder.component';

@Component({
  selector: 'project-root',
  standalone: true,
  imports: [CommonModule, JsonPlaceHolderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Json Place Holder Assignment';
}
