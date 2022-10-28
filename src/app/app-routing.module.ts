import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankLogInComponent } from './bank-log-in/bank-log-in.component';
import { BankWelcomePageComponent } from './bank-welcome-page/bank-welcome-page.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { DepositePageComponent } from './deposite-page/deposite-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { WithdrawPageComponent } from './withdraw-page/withdraw-page.component';

const routes: Routes = [
  { path: '', component: BankLogInComponent },
  { path: 'loginPage', component: BankLogInComponent },
  { path: 'Welcome', component: BankWelcomePageComponent },
  { path: 'Register', component: RegisterPageComponent },
  { path: 'deposite', component: DepositePageComponent },
  { path: 'withdraw', component: WithdrawPageComponent },
  { path: 'transactions', component: TransactionHistoryComponent },
  { path: 'deleteAccount', component: DeleteAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
