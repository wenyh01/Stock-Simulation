import { Component, OnInit, Input } from '@angular/core';
import { PriceService } from '../price.service'

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.css']
})
export class StockInfoComponent implements OnInit {
  @Input() clicked: boolean
  @Input() ticker: string
  @Input() price: number
  @Input() error: boolean

  constructor(private priceService: PriceService) { }

  ngOnInit() {
  }


}
