import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeCurrenciesComponent } from './exchange-currencies.component';

const routes: Routes = [

  {
    path: '',
    component: ExchangeCurrenciesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeCurrenciesRoutingModule { }
