import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-nav-bar',
  templateUrl: './bank-nav-bar.component.html',
  styleUrls: ['./bank-nav-bar.component.css']
})
export class BankNavBarComponent implements OnInit {
loginPage: string|any[]|null|undefined;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  exit(){
    this.router.navigateByUrl('/loginPage')
  }
  depos(){
    this.router.navigateByUrl('deposite')
  }
  withdrw(){
    this.router.navigateByUrl('withdraw')
  }
}
