import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankWelcomePageComponent } from './bank-welcome-page.component';

describe('BankWelcomePageComponent', () => {
  let component: BankWelcomePageComponent;
  let fixture: ComponentFixture<BankWelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankWelcomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
