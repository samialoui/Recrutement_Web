import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutModifOffreComponent } from './ajout-modif-offre.component';

describe('AjoutModifOffreComponent', () => {
  let component: AjoutModifOffreComponent;
  let fixture: ComponentFixture<AjoutModifOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutModifOffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutModifOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
