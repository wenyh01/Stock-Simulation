import { Component, OnInit } from '@angular/core';
import { PriceService } from '../price.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  clicked: boolean = false
  ticker: string = ''
  error: boolean = false
  price: number = 0

  constructor(private priceService: PriceService) { }

  ngOnInit() {
  }

  search(): void{
    this.ticker = (<HTMLInputElement>document.getElementById('ticker')).value
    this.clicked = true
    this.priceService.getPrice(this.ticker).subscribe(
      price => {
        this.price = price
        this.error = false
      },
      error => {
        window.alert('ticker problem')
        this.error = true
      }
    )
  }
}
