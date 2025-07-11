import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense.model';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];
  isLoading = true;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenseService.getAll().subscribe({
      next: data => {
        this.expenses = data;
        this.isLoading = false;
      },
      error: err => {
        console.error('Error loading expenses', err);
        this.isLoading = false;
      }
    });
  }
}
