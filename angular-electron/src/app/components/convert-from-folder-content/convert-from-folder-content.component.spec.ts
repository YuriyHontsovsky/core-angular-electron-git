import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertFromFolderContentComponent } from './convert-from-folder-content.component';

describe('ConvertFromFolderContentComponent', () => {
  let component: ConvertFromFolderContentComponent;
  let fixture: ComponentFixture<ConvertFromFolderContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertFromFolderContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertFromFolderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
