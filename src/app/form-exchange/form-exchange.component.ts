import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from './../currencies.service';
import { FormBuilder, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-form-exchange',
  templateUrl: './form-exchange.component.html',
  styleUrls: ['./form-exchange.component.sass']
})
export class FormExchangeComponent implements OnInit {

  public currenciesList: any = []
  public singleValue: number = 0
  public calculatedValue: number = 0
  public sourceSymbol: string = '€'
  public Object = Object;

  public formExchange: FormGroup | undefined;

  constructor(private CurrenciesService: CurrenciesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getCurrenciesList()
    this.buildForm();

    this.getConverterCurrencies(
      this.formExchange?.value.amount,
      this.formExchange?.value.source,
      this.formExchange?.value.target,
    )
    this.onChange()


  }

  private buildForm() {
    this.formExchange = this.formBuilder.group(
      {
        source: ['EUR'],
        target: ['USD'],
        amount: ['1']
      }
    );
  }

  getCurrenciesList() {
    this.CurrenciesService.get2("/api/currencies?")
      .subscribe((response: any) => {

        this.currenciesList = response.results


      })

  }
  getConverterCurrencies(amount: number, l_source: string, l_target: string) {
    this.CurrenciesService.get2('/api/convert?q=' + l_source + '_' + l_target + '&compact=ultra&')
      .subscribe((response: Object) => {
        let item = Object.keys(response)[0]
        this.singleValue = Object.values(response)[0]
        this.setCalculateAmount(amount)

      })
  }

  setCalculateAmount(l_amount: number) {
    let calc: any = (l_amount * this.singleValue).toFixed(2)
    this.calculatedValue = calc
  }

  setSourceSymbol() {
    let l_entries: any[] = []
    if (this.currenciesList) {
      l_entries = Object.values(this.currenciesList)
      let l_element = l_entries.find(item => item.id == this.formExchange?.value.source)
      this.sourceSymbol = l_element.currencySymbol ? l_element.currencySymbol : '$'

    }

  }
  onChange() {
    this.formExchange?.valueChanges.subscribe(item => {

      this.getConverterCurrencies(
        item.amount,
        item.source,
        item.target,
      )
      this.setSourceSymbol()
    }
    )


  }
  public swap() {
    let l_source = this.formExchange?.value.source
    let l_target = this.formExchange?.value.target

    this.formExchange?.patchValue({
      source: l_target,
      target: l_source,
    })


  }

}
