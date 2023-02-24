import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutementPartageeComponent } from './recrutement-partagee.component';

describe('RecrutementPartageeComponent', () => {
  let component: RecrutementPartageeComponent;
  let fixture: ComponentFixture<RecrutementPartageeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecrutementPartageeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecrutementPartageeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
