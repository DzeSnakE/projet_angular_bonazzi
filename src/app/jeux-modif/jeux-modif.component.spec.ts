import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxModifComponent } from './jeux-modif.component';

describe('JeuxModifComponent', () => {
  let component: JeuxModifComponent;
  let fixture: ComponentFixture<JeuxModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeuxModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuxModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
