import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflexComponent } from './netflex.component';

describe('NetflexComponent', () => {
  let component: NetflexComponent;
  let fixture: ComponentFixture<NetflexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetflexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
