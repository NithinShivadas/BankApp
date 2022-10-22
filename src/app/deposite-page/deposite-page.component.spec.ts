import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositePageComponent } from './deposite-page.component';

describe('DepositePageComponent', () => {
  let component: DepositePageComponent;
  let fixture: ComponentFixture<DepositePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
