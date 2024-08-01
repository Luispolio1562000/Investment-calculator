import { Component, Input, computed, inject, input } from '@angular/core';
import { ResultInvestmentModel } from '../../investment.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investementService = inject(InvestmentService)

  
  results = computed(()=> this.investementService.redultData())
// Nos proporciona el mismo resultado de solo lectura de el signal. 
  //results = this.investementService.redultData.asReadonly();

}
