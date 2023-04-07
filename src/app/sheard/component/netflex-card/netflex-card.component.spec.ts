import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflexCardComponent } from './netflex-card.component';

describe('NetflexCardComponent', () => {
  let component: NetflexCardComponent;
  let fixture: ComponentFixture<NetflexCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetflexCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetflexCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
