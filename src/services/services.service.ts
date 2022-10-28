import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

const options = { headers: new HttpHeaders() };

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  SavingsAccount: any = {};

  constructor(private http: HttpClient) {}

  //-----------------------register account--------------------------

  RegisterAccount(
    fName: any,
    LName: any,
    Accno: any,
    Address: any,
    Aadhar: any,
    mobile: any,
    eMail: any,
    password: any,
    cnfrmPassword: any,
    balance: any
  ) {
    const regData = {
      fName,
      LName,
      Accno,
      Address,
      Aadhar,
      mobile,
      eMail,
      password,
      cnfrmPassword,
      balance,
    };
    return this.http.post('http://localhost:3001/register', regData);
  }

  //---------------------log in function----------------------------------

  AccntLogIn(Accno: any, password: any) {
    const logData = { Accno, password };

    return this.http.post('http://localhost:3001/login', logData);
  }

  //-----------------------------------Deposite---------------------------

  //----------------middleWare value get function------------------

  getOptions() {
    var Token = JSON.parse(localStorage.getItem('Token') || '');
    //console.log(Token)
    let headers = new HttpHeaders();
    if (Token) {
      headers = headers.append('tokenCode', Token);
      options.headers = headers;
    }
    return options;
  }

  //-------------Deposite-----------------

  deposite(Accno: any, password: any, amount: any) {
    // console.log("Workingggg...!!!!!!")

    const depositeData = { Accno, password, amount };

    return this.http.post(
      'http://localhost:3001/deposite',
      depositeData,
      this.getOptions()
    );
  }

  //------------------------Withdraw---------------------------

  withdraw(Accno: any, password: any, amount: any) {
    // console.log("Workingggg...!!!!!!")

    const depositeData = { Accno, password, amount };

    return this.http.post(
      'http://localhost:3001/withdraw',
      depositeData,
      this.getOptions()
    );
  }

  //---------------Delete Account----------------------

  DeleteAccount(accno:any){
    return this.http.delete('http://localhost:3001/delete/'+accno)
  }
}
