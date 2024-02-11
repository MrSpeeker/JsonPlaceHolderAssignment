import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentItemComponent } from './current-item.component';

describe('CurrentItemComponent', () => {
  let component: CurrentItemComponent;
  let fixture: ComponentFixture<CurrentItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CurrentItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the currentId value', () => {
    const currentId = 10;
    component.currentId = currentId;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent.trim()).toEqual(
      String(currentId)
    );
  });

  it('should have a default currentId value of 0', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent.trim()).toEqual('0');
  });
});
