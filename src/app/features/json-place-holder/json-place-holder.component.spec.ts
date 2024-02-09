import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPlaceHolderComponent } from './json-place-holder.component';

describe('JsonPlaceHolderComponent', () => {
  let component: JsonPlaceHolderComponent;
  let fixture: ComponentFixture<JsonPlaceHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonPlaceHolderComponent]
    });
    fixture = TestBed.createComponent(JsonPlaceHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
