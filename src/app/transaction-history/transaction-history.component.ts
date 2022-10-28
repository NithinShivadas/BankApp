import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  dummyArray:any=[]
  constructor(private http:HttpClient) { 
    var acno:any= JSON.parse (localStorage.getItem('currentAccNo')||'')
    this.http.post('http://localhost:3001/transaction',{"Accno":acno})
    .subscribe((result:any)=>{
      this.dummyArray.push(result.transaction)
    })
  }

  ngOnInit(): void {
  }

}
