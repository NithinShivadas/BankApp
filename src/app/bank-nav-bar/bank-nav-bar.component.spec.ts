import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankNavBarComponent } from './bank-nav-bar.component';

describe('BankNavBarComponent', () => {
  let component: BankNavBarComponent;
  let fixture: ComponentFixture<BankNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
