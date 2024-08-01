import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentModel } from '../../investment.model';
import { InvestmentService } from '../../investment.service';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvest = signal('0');
  enteredAnnualInvest = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService){

  }

  onSubmit() {

    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvest(),
      duration: Number(this.enteredDuration()),
      annualInvestment: Number(this.enteredAnnualInvest()),
      expectedReturn: Number(this.enteredExpectedReturn()),
    });
    
    
    this.enteredInitialInvest.set('');
    this.enteredAnnualInvest.set('');
    this.enteredExpectedReturn.set('');
    this.enteredDuration.set('')
  
  }
}
