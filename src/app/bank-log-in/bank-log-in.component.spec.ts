import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankLogInComponent } from './bank-log-in.component';

describe('BankLogInComponent', () => {
  let component: BankLogInComponent;
  let fixture: ComponentFixture<BankLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankLogInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
