import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutementNonTraiteComponent } from './recrutement-non-traite.component';

describe('RecrutementNonTraiteComponent', () => {
  let component: RecrutementNonTraiteComponent;
  let fixture: ComponentFixture<RecrutementNonTraiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecrutementNonTraiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecrutementNonTraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
