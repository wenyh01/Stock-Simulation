import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { HttpClient, HttpHeaders } from '@angular/common/http' //for http request
import { catchError, map, tap } from 'rxjs/operators' //for handling error


@Injectable()
export class PriceService {

  constructor(private http: HttpClient) { }

  getPrice(ticker: string): Observable<number>{
    var url = "https://api.iextrading.com/1.0/stock/" + ticker + "/price"
    console.log(url)
    return this.http.get<number>(url)
  }

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      return of(result as T)
    }
  }
}
