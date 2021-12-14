import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiqueListComponent } from './musique-list.component';

describe('MusiqueListComponent', () => {
  let component: MusiqueListComponent;
  let fixture: ComponentFixture<MusiqueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusiqueListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusiqueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
