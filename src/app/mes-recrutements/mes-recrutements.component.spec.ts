import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesRecrutementsComponent } from './mes-recrutements.component';

describe('MesRecrutementsComponent', () => {
  let component: MesRecrutementsComponent;
  let fixture: ComponentFixture<MesRecrutementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesRecrutementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesRecrutementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
