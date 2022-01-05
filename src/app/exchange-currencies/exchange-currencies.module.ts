import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeCurrenciesRoutingModule } from './exchange-currencies-routing.module';
import { ExchangeCurrenciesComponent } from './exchange-currencies.component';
import { FormExchangeComponent } from '../form-exchange/form-exchange.component';
import { CurrenciesNamePipe } from '../currencies-name.pipe';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ExchangeCurrenciesComponent,
    FormExchangeComponent,
    CurrenciesNamePipe,
  ],
  imports: [
    CommonModule,
    ExchangeCurrenciesRoutingModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule
        
  ]
})
export class ExchangeCurrenciesModule { }
