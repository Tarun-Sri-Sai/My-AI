import { Component } from '@angular/core';
import { RealEstateAppService } from '../real-estate-app.service';

@Component({
  selector: 'app-real-estate-result',
  templateUrl: './real-estate-result.component.html',
  styleUrls: ['./real-estate-result.component.css']
})
export class RealEstateResultComponent {
    constructor(public realEstateApp: RealEstateAppService) { }
}
