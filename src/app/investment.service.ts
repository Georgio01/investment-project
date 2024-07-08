import { Injectable, signal } from "@angular/core";
import { InvestmentInput } from "./investment-input.model";

@Injectable({providedIn:'root'})
export class InvestmentService{
resultData=signal<{
  year:number;
  interset:number;
  valueEndOfYear:number;
  annualInvestment:number;
  totalInvestment:number;
  totalAmountInvested:number;

}[] | undefined>(undefined);

    calculateInvestmentResults(data:InvestmentInput){
        const{initialInvestment,annualInvestment,expectedReturn,duration}=data;
        
            const annualData=[];
            let investmentValue=initialInvestment;
        
            for(let i=0;i<duration;i++){
              const year=i+1;
              const intersetEarenedInYear=investmentValue*(expectedReturn/100);
              investmentValue+=intersetEarenedInYear+annualInvestment;
              const totalInterest=
              investmentValue-annualInvestment*year-initialInvestment;
              annualData.push({
                year:year,
                interset:intersetEarenedInYear,
                valueEndOfYear:investmentValue,
                annualInvestment:annualInvestment,
                totalInvestment:totalInterest,
                totalAmountInvested:initialInvestment + annualInvestment*year,
              });
            }
            this.resultData.set(annualData);
            //this.resultData=annualData;
        

}
}