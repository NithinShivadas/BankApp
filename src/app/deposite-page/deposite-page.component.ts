import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/services/services.service';

const options={headers:new HttpHeaders}

@Component({
  selector: 'app-deposite-page',
  templateUrl: './deposite-page.component.html',
  styleUrls: ['./deposite-page.component.css']
})
export class DepositePageComponent implements OnInit {
  depositeForm=this.fb.group({
    Accno:[''],
    Pwrd:[''],
    Amnt:['']



  })

  constructor(private router:Router,private fb:FormBuilder, private ser:ServicesService,private http:HttpClient) { }

  ngOnInit(): void {
  }

  

  deposite(){
    var Accno:any=this.depositeForm.value.Accno
    var password:any=this.depositeForm.value.Pwrd
    var amount:any=this.depositeForm.value.Amnt

     //return this.http.post('http://localhost:3001/deposite',depositeData,this.getOptions())
     return this.ser.deposite(Accno,password,amount)
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
