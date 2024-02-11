import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';

import { IJsonPlaceHolder } from '../../models/json-place-holder.interface';
import * as JsonActions from '../../store/json-place-holder.action';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public json!: IJsonPlaceHolder;
  @Input() public changeColor = false;
  @Output() public itemChangeEvent: EventEmitter<number> =
    new EventEmitter<number>();

  public isHovered = false;

  constructor(private _store: Store) {}

  public itemClicked() {
    this._store.dispatch(
      JsonActions.updateItemState({ currentId: this.json.id })
    );

    this.itemChangeEvent.emit(this.json.id);
  }

  public changeValue() {
    if (this.json.itemType === 0) {
      return this.json.title;
    } else if (this.json.itemType === 1) {
      return this.json.userId;
    } else if (this.json.itemType === 2) {
      return this.json.id;
    } else {
      return this.json.body;
    }
  }

  public showText() {
    this.isHovered = true;
  }

  public hideText() {
    this.isHovered = false;
  }
}
