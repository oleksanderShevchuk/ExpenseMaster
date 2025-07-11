import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ExpensePageComponent } from './pages/expense-page/expense-page.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'expenses', component: ExpensePageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
