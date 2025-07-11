import { Component, ViewChild } from '@angular/core';
import { ExpenseListComponent } from '../../components/expense-list/expense-list.component';

@Component({
  selector: 'app-expense-page',
  templateUrl: './expense-page.component.html',
  styleUrl: './expense-page.component.css'
})
export class ExpensePageComponent {
  @ViewChild('expenseList') expenseListComponent!: ExpenseListComponent;

  refreshExpenses() {
    this.expenseListComponent.ngOnInit();
  }
}
