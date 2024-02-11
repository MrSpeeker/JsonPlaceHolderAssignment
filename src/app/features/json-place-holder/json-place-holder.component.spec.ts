import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { JsonPlaceHolderComponent } from './json-place-holder.component';

describe('JsonPlaceHolderComponent', () => {
  let component: JsonPlaceHolderComponent;
  let fixture: ComponentFixture<JsonPlaceHolderComponent>;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsonPlaceHolderComponent, StoreModule.forRoot({})],
    });
    fixture = TestBed.createComponent(JsonPlaceHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPlaceHolderComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize jsonItems and currentId correctly', () => {
    expect(component.jsonItems).toEqual([]);
    expect(component.currentId).toEqual(0);
  });

  it('should unsubscribe on ngOnDestroy', () => {
    spyOn(component['_jsonSubscription'], 'unsubscribe');

    component.ngOnDestroy();

    expect(component['_jsonSubscription'].unsubscribe).toHaveBeenCalled();
  });

  it('should set currentId correctly on getCurrentItemId', () => {
    const id = 123;
    component.getCurrentItemId(id);
    expect(component.currentId).toEqual(id);
  });
});
