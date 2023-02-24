import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichOffreComponent } from './affich-offre.component';

describe('AffichOffreComponent', () => {
  let component: AffichOffreComponent;
  let fixture: ComponentFixture<AffichOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichOffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
