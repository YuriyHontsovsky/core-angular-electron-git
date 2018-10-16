import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertFromImageTypeTotalComponent } from './convert-from-image-type-total.component';

describe('ConvertFromImageTypeTotalComponent', () => {
  let component: ConvertFromImageTypeTotalComponent;
  let fixture: ComponentFixture<ConvertFromImageTypeTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertFromImageTypeTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertFromImageTypeTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
