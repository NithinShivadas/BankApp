import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/services/services.service';

@Component({
  selector: 'app-bank-nav-bar',
  templateUrl: './bank-nav-bar.component.html',
  styleUrls: ['./bank-nav-bar.component.css'],
})
export class BankNavBarComponent implements OnInit {
  AccountNum: any;

  constructor(private router: Router, private ser: ServicesService) {}

  ngOnInit(): void {}

  //------------Delete Account------------------------
  delAccount() {
    this.AccountNum = JSON.parse(localStorage.getItem('currentAccNo') || '');
  }
  cancel() {
    this.AccountNum = '';
  }
  Deleted(event: any) {
    this.ser.DeleteAccount(event).subscribe((result: any) => {
      if (result) {
        alert(result.message);
        this.router.navigateByUrl('loginPage');
      }
    });
  }
}
