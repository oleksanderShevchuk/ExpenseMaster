import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent {
  expenseForm: FormGroup;
  isSubmitting = false;

  @Output() expenseCreated = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private expenseService: ExpenseService) {
    this.expenseForm = this.fb.group({
      title: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(0.01)]],
      date: [new Date().toISOString().substring(0, 10), Validators.required],
      category: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit(): void {
    if (this.expenseForm.invalid) return;

    this.isSubmitting = true;

    this.expenseService.create(this.expenseForm.value).subscribe({
      next: () => {
        this.expenseForm.reset();
        this.isSubmitting = false;
        this.expenseCreated.emit(); // notify parent 
      },
      error: err => {
        console.error('Error creating expense:', err);
        this.isSubmitting = false;
      }
    });
  }
}
