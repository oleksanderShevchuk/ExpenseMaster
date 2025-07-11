import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expense } from '../models/expense.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private apiUrl = 'https://localhost:7132/api/expenses';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.apiUrl);
  }

  get(id: number): Observable<Expense> {
    return this.http.get<Expense>(`${this.apiUrl}/${id}`);
  }

  create(expense: Omit<Expense, 'id'>): Observable<Expense> {
    return this.http.post<Expense>(this.apiUrl, expense);
  }

  update(id: number, expense: Omit<Expense, 'id'>): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, expense);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
