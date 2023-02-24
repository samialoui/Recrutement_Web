import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutementTraiteComponent } from './recrutement-traite.component';

describe('RecrutementTraiteComponent', () => {
  let component: RecrutementTraiteComponent;
  let fixture: ComponentFixture<RecrutementTraiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecrutementTraiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecrutementTraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
