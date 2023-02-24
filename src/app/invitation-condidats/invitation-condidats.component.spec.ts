import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationCondidatsComponent } from './invitation-condidats.component';

describe('InvitationCondidatsComponent', () => {
  let component: InvitationCondidatsComponent;
  let fixture: ComponentFixture<InvitationCondidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitationCondidatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitationCondidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
