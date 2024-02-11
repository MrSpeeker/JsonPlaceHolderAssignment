import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Store, StoreModule } from '@ngrx/store';

import * as JsonActions from '../../store/json-place-holder.action';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CardComponent,
        MatCardModule,
        MatIconModule,
        StoreModule.forRoot({}),
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    component.json = { id: 1, title: 'Test Title', userId: 1, itemType: 0, body: 'Test Body' };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit itemChangeEvent correctly on itemClicked', () => {
    spyOn(store, 'dispatch');
    spyOn(component.itemChangeEvent, 'emit');

    component.itemClicked();

    expect(store.dispatch).toHaveBeenCalledWith(JsonActions.updateItemState({ currentId: 1 }));
    expect(component.itemChangeEvent.emit).toHaveBeenCalledWith(1);
  });

  it('should return correct value on changeValue', () => {
    // Test for itemType 0
    component.json.itemType = 0;
    expect(component.changeValue()).toEqual('Test Title');

    // Test for itemType 1
    component.json.itemType = 1;
    expect(component.changeValue()).toEqual(1);

    // Test for itemType 2
    component.json.itemType = 2;
    expect(component.changeValue()).toEqual(1);

    // Test for default case
    component.json.itemType = 3;
    expect(component.changeValue()).toEqual('Test Body');
  });

  it('should set isHovered to true on showText', () => {
    component.showText();
    expect(component.isHovered).toBeTruthy();
  });

  it('should set isHovered to false on hideText', () => {
    component.isHovered = true;
    component.hideText();
    expect(component.isHovered).toBeFalsy();
  });
});