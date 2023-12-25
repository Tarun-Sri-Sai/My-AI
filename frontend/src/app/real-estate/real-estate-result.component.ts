import { Component } from '@angular/core';
import { PriceService } from './price.service';

@Component({
  selector: 'app-real-estate-result',
  template: `
    <div *ngIf="priceService.getPrice() > 0" class="alert alert-info">
      {{ "Price in lacs: Rs. " + priceService.getPrice().toFixed(2) }}
    </div>

  `,
  styles: [`

  `],
})
export class RealEstateResultComponent {
  constructor(public priceService: PriceService) {}
}

