import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentModel } from '../../investment.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvest: string = '0';
  enteredAnnualInvest: string = '0';
  enteredExpectedReturn:string = '5';
  enteredDuration:string= '10';

  @Output() calculate = new EventEmitter<InvestmentModel>();

  onSubmit() {
   this.calculate.emit({
    initialInvestment: +this.enteredInitialInvest,
    duration: Number(this.enteredDuration),
    annualInvestment: Number(this.enteredAnnualInvest),
    expectedReturn: Number(this.enteredExpectedReturn),
   })
    
    
    
  }
}
