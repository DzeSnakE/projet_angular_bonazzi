import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiqueModifComponent } from './musique-modif.component';

describe('MusiqueModifComponent', () => {
  let component: MusiqueModifComponent;
  let fixture: ComponentFixture<MusiqueModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusiqueModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusiqueModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
