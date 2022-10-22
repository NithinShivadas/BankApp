import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/services/services.service';

@Component({
  selector: 'app-withdraw-page',
  templateUrl: './withdraw-page.component.html',
  styleUrls: ['./withdraw-page.component.css']
})
export class WithdrawPageComponent implements OnInit {

  withdrawForm=this.fb.group({
    Accno:[''],
    Pwrd:[''],
    Amnt:['']
  })

  constructor(private fb:FormBuilder,private router:Router,private ser:ServicesService,private http:HttpClient) { }

  ngOnInit(): void {
  }
  withdraw(){
    var Accno:any=this.withdrawForm.value.Accno
    var password:any=this.withdrawForm.value.Pwrd
    var amount:any=this.withdrawForm.value.Amnt

    //console.log(Accno,password,amount)

     //return this.http.post('http://localhost:3001/deposite',depositeData,this.getOptions())
     return this.ser.withdraw(Accno,password,amount)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl('/Welcome')
      }
      
  },(result)=>{
    alert(result.error.message)
  })
  }

}
