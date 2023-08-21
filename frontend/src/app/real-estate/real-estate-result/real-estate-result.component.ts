import { Component } from '@angular/core';
import { PriceService } from '../price.service';

@Component({
  selector: 'app-real-estate-result',
  templateUrl: './real-estate-result.component.html',
  styleUrls: ['./real-estate-result.component.css'],
})
export class RealEstateResultComponent {
  constructor(public priceService: PriceService) {}
}
