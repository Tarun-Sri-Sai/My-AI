import { Component } from '@angular/core';
import { ColumnsService } from '../columns.service';
import { DataValuesService } from '../data-values.service';
import { PriceService } from '../price.service';

@Component({
  selector: 'app-real-estate-input',
  templateUrl: './real-estate-input.component.html',
  styleUrls: ['./real-estate-input.component.css'],
})
export class RealEstateInputComponent {
  inputData: { [column: string]: any } = {};
  selectedOption: { [column: string]: any } = {};

  constructor(
    public columnsService: ColumnsService,
    public dataValuesService: DataValuesService,
    private priceService: PriceService
  ) {}

  transformColumnName(column: string): string {
    return column
      .split('_')
      .map((word) => {
        if (word.includes('/')) {
          return word.toUpperCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  }

  sendInput(): void {
    this.getInputData();
    for (let column of this.columnsService.getColumns()) {
      if (!this.inputData[column]) {
        return;
      }
    }
    this.priceService.predictPrice(this.inputData);
  }

  getInputData(): void {
    for (let column of this.columnsService.getColumns()) {
      this.inputData[column] = this.selectedOption[column];
    }
  }

  customSearch(term: string, item: any): boolean {
    return item.toString().toLowerCase().includes(term.toLowerCase());
  }

  isEncoded(column: string): boolean {
    return this.dataValuesService.getDataValues().hasOwnProperty(column);
  }
}
