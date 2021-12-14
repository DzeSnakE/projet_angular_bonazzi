import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiqueNewComponent } from './musique-new.component';

describe('MusiqueNewComponent', () => {
  let component: MusiqueNewComponent;
  let fixture: ComponentFixture<MusiqueNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusiqueNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusiqueNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
