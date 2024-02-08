import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'zivver-current-item',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './current-item.component.html',
  styleUrls: ['./current-item.component.scss'],
})
export class CurrentItemComponent {
  @Input() public currentId = 0;
}
