import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from "./components/user-input/user-input.component";
import { InvestmentModel } from './investment.model';
import { InvestmentResultsComponent } from "./components/investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent]
})
export class AppComponent {
  
  calculateInvestmentResults(investData: InvestmentModel) {
  
      
    const {initialInvestment, duration, annualInvestment, expectedReturn} = investData;
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  
    console.log(annualData);
    
   // return annualData;
  }


}
