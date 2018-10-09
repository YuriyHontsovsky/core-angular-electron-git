import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertFromComponent } from './convert-from.component';

describe('ConvertFromComponent', () => {
  let component: ConvertFromComponent;
  let fixture: ComponentFixture<ConvertFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
