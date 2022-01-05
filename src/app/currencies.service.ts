import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  // private apikey = "3684fb5daf93c3676df0aba5919e586a";
  // private apikey1 = "17102|th~aJOHfWm2ZLVycQZ8_e79NLNDPhC8f";
  private apikey2 = "6b62c9ab9e59b9784a07";


  constructor(private http: HttpClient) { }

  // public get(url: string) {

  //   return this.http.get(url + "&access_key=" + this.apikey)

  // }
  // public get1(url: string) {

  //   return this.http.get(url + "&key=" + this.apikey1)

  // }
  public get2(url: string) {

    return this.http.get(url + "apiKey=" + this.apikey2)

  }
}
