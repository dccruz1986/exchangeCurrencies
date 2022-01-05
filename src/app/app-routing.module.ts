import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
     loadChildren:() =>import('./exchange-currencies/exchange-currencies.module').then(m => m.ExchangeCurrenciesModule)
    ,
  },
  {
    path:'**',
    redirectTo: ""
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
