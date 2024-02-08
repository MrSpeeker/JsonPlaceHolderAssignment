import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { IJsonPlaceHolder } from '../../models/json-place-holder.interface';
import * as JsonActions from '../../store/json-place-holder.action';
import { CardComponent } from '../../ui/card/card.component';
import { CurrentItemComponent } from '../../ui/current-item/current-item.component';

@Component({
  selector: 'zivver-json-place-holder',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    CardComponent,
    CurrentItemComponent,
  ],
  templateUrl: './json-place-holder.component.html',
  styleUrls: ['./json-place-holder.component.scss'],
})
export class JsonPlaceHolderComponent implements OnInit, OnDestroy {
  public jsonItems: IJsonPlaceHolder[] = [];
  public currentId: number = 0;

  private _jsonItems$!: Observable<IJsonPlaceHolder>;
  private _jsonSubscription: Subscription = new Subscription();

  constructor(private _store: Store) {}

  ngOnInit(): void {
    this._jsonItems$ = this._store.select(
      (state: any) => state.jsonPlaceHolder.json
    );
    this._loadData();
  }

  ngOnDestroy(): void {
    this._jsonSubscription.unsubscribe();
  }

  public getCurrentItemId(id: number) {
    this.currentId = id;
  }

  private _loadData() {
    this._jsonSubscription = this._jsonItems$.subscribe((json: any) => {
      if (json.length) {
        this.jsonItems = Object.values(json);
      } else {
        this._store.dispatch(JsonActions.loadJsonPlaceHolders());
      }
    });
  }
}
