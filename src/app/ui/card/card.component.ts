import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';

import { IJsonPlaceHolder } from '../../models/json-place-holder.interface';
import * as JsonActions from '../../store/json-place-holder.action';
import { jsonPlaceHolderEnum } from 'src/app/models/json-place-holder.type';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public json!: IJsonPlaceHolder;
  @Output() public itemChangeEvent: EventEmitter<number> =
    new EventEmitter<number>();

  constructor(private _store: Store) {}

  public itemClicked() {
    this._store.dispatch(
      JsonActions.updateItemState({ currentId: this.json.id })
    );

    this.itemChangeEvent.emit(this.json.id);
  }
}
