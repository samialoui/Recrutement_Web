import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutModifCandidatComponent } from './ajout-modif-candidat.component';

describe('AjoutModifCandidatComponent', () => {
  let component: AjoutModifCandidatComponent;
  let fixture: ComponentFixture<AjoutModifCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutModifCandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutModifCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
