import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelFieldComponent } from './tel-field.component';

describe('TelFieldComponent', () => {
  let component: TelFieldComponent;
  let fixture: ComponentFixture<TelFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
