import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/services/services.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
    registerForm=this.fb.group({
    firstName:['',[Validators.required]],
    LastName:['',[Validators.required]],
    Accno:['',[Validators.required]],
    Address:['',[Validators.required]],
    Aadhar:['',[Validators.required]],
    MobileNum:['',[Validators.required]],
    Email:['',[Validators.required, Validators.email]],
    Password:['', [Validators.required]],
    cnfrmPassword:['', [Validators.required]],
    balance:['',[Validators.required]]



  })

  constructor( private router:Router, private ser:ServicesService,private fb:FormBuilder) { }

  ngOnInit(): void {

  }


  registerAcc(){
   var firstname:any=this.  registerForm.value.firstName
   var LastName:any=this.  registerForm.value.LastName
   var Accnum:any=this.  registerForm.value.Accno
   var Address:any=this.  registerForm.value.Address
   var Aadhar:any=this.  registerForm.value.Aadhar
   var MobileNum:any=this.  registerForm.value.MobileNum
   var Email:any=this.  registerForm.value.Email
   var Password:any=this.  registerForm.value.Password
   var cnfrmPassword:any=this.  registerForm.value.cnfrmPassword
   var balance:any=this.  registerForm.value.balance

   if(this.registerForm.valid){
    this.ser.RegisterAccount(firstname,LastName,Accnum,Address,Aadhar,MobileNum,Email,Password,cnfrmPassword,balance)
    .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          this.router.navigateByUrl('/loginPage')
        }
        
    },(result)=>{
      alert(result.error.message)
    })

   }else{
    alert("Fill All The Fields")
   }
   
    
  }

}
