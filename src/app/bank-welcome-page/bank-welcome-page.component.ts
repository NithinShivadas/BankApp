import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/services/services.service';

@Component({
  selector: 'app-bank-welcome-page',
  templateUrl: './bank-welcome-page.component.html',
  styleUrls: ['./bank-welcome-page.component.css']
})
export class BankWelcomePageComponent implements OnInit {
loginPage: string|any[]|null|undefined;
// loginPage: string|any[]|null|undefined;



  constructor(private router:Router ,private ser:ServicesService) { }

  ngOnInit(): void {
  }
  // gotoLogin(){
  //    this.router.navigateByUrl('loginPage')
  // }

  

}
