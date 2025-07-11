import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ExpensePageComponent } from './pages/expense-page/expense-page.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ExpensePageComponent,
    ExpenseListComponent,
    ExpenseFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
