import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/services/services.service';

@Component({
  selector: 'app-bank-log-in',
  templateUrl: './bank-log-in.component.html',
  styleUrls: ['./bank-log-in.component.css']
})
export class BankLogInComponent implements OnInit {
  loginForm=this.fb.group({

    Accno:['',[Validators.required]],
    password:['', [Validators.required]]
  })

  constructor(private router:Router,private fb:FormBuilder,private ser:ServicesService) { }

  ngOnInit(): void {
  }


  // log in function declaring here

  signin(){
    var Accno=this.loginForm.value.Accno;
    var pwrd=this.loginForm.value.password;

    //console.log("aadhar:",Aadhar,"password:",pwrd)
    if(this.loginForm.valid){
      this.ser.AccntLogIn(Accno,pwrd)

      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          localStorage.setItem('currentUserName',JSON.stringify(result.currentUserName))
          localStorage.setItem('currentAccNo',JSON.stringify(result.currentAccNo))
          localStorage.setItem('Token',JSON.stringify(result.Token))

          this.router.navigateByUrl('Welcome')
        }
    },(result)=>{
      alert(result.error.message)
      //this.router.navigateByUrl('Welcome')
    }
    )
    }else{
      alert("please fill all the fields")
    }
   
    
    
  }
}
