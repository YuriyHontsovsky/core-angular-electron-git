import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertFromImageTypeComponent } from './convert-from-image-type.component';

describe('ConvertFromImageTypeComponent', () => {
  let component: ConvertFromImageTypeComponent;
  let fixture: ComponentFixture<ConvertFromImageTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertFromImageTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertFromImageTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
