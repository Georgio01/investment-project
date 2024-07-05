import { CurrencyPipe } from "@angular/common"
import { Component, Input, input } from "@angular/core"

@Component({

    selector:'app-investment-results',
    standalone:true,
    imports:[CurrencyPipe],
    templateUrl:'./investment-result.component.html',
    styleUrl:'./investment-result.component.less',
})

export class InvestmentResultsComponent{
    results=input<{
        year:number,
        interset:number,
        valueEndOfYear:number,
        annualInvestment:number,
        totalInvestment:number,
        totalAmountInvested:number,}[]>()

   /* @Input()results?:{
        year:number,
        interset:number,
        valueEndOfYear:number,
        annualInvestment:number,
        totalInvestment:number,
        totalAmountInvested:number,
    }
    */
}