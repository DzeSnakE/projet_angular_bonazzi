import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxNewComponent } from './jeux-new.component';

describe('JeuxNewComponent', () => {
  let component: JeuxNewComponent;
  let fixture: ComponentFixture<JeuxNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeuxNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuxNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
