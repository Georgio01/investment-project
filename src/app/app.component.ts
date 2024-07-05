import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import type {InvestmentInput } from './investment-input.model';
import { InvestmentResultsComponent } from './investment-result/investment-result.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserInputComponent,InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'investment-project';

 
  resultsData=signal<{
    year:number,
    interset:number,
    valueEndOfYear:number,
    annualInvestment:number,
    totalInvestment:number,
    totalAmountInvested:number,}[] | undefined >(undefined);


  
  }



