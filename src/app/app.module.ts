import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankLogInComponent } from './bank-log-in/bank-log-in.component';
import { BankWelcomePageComponent } from './bank-welcome-page/bank-welcome-page.component';
import { BankNavBarComponent } from './bank-nav-bar/bank-nav-bar.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DepositePageComponent } from './deposite-page/deposite-page.component';
import { WithdrawPageComponent } from './withdraw-page/withdraw-page.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';

@NgModule({
  declarations: [
    AppComponent,
    BankLogInComponent,
    BankWelcomePageComponent,
    BankNavBarComponent,
    RegisterPageComponent,
    DepositePageComponent,
    WithdrawPageComponent,
    TransactionHistoryComponent,
    DeleteAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
