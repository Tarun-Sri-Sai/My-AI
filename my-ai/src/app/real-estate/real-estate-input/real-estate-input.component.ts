import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RealEstateAppService } from '../real-estate-app.service';

@Component({
    selector: 'app-real-estate-input',
    templateUrl: './real-estate-input.component.html',
    styleUrls: ['./real-estate-input.component.css']
})
export class RealEstateInputComponent {
    columns: string[] = []
    dataValues: { [column: string]: any[] } = {}
    inputData: { [column: string]: any } = {}
    processedInput: { [column: string]: any[] } = {}
    selectedOption: { [column: string]: any } = {}

    constructor(private http: HttpClient, public realEstateApp: RealEstateAppService) { }

    ngOnInit() {
        this.getColumns()
        this.getDataValues()
    }

    getColumns(): void {
        this.http.get<any>('http://localhost:5000/real_estate_predictor/column_names')
            .subscribe({
                next: (response) => {
                    this.columns = response['column_names']
                },
                error: (err) => {
                    console.error('Unable to receive columns due to ', err)
                }
            })
    }

    getDataValues(): void {
        this.http.get<any>('http://localhost:5000/real_estate_predictor/data_values')
            .subscribe({
                next: (response) => {
                    this.dataValues = response['data_values']
                },
                error: (err) => {
                    console.error('Unable to receive data values due to ', err)
                }
            })
    }

    transformColumnName(column: string): string {
        return column.split('_').map((word) => {
            if (word.includes('/')) {
                return word.toUpperCase()
            }
            return word.charAt(0).toUpperCase() + word.slice(1)
        }).join(' ')
    }

    getResult(): void {
        this.getInputData()

        for (let column of this.columns) {
            if (!this.inputData[column]) {
                return
            }
        }

        this.processInput()
    }

    processInput(): void {
        this.http.put<any>('http://localhost:5000/real_estate_predictor/input', this.inputData)
            .subscribe({
                next: (response) => {
                    this.getProcessed()
                },
                error: (error) => {
                    console.error("Couldn't process input due to ", error)
                }
            })
    }

    getProcessed(): void {
        this.http.get<any>('http://localhost:5000/real_estate_predictor/input')
            .subscribe({
                next: (response) => {
                    this.processedInput = response['processed_input']
                    this.predictPrice()
                },
                error: (error) => {
                    console.error("Couldn't retrieve processed input due to ", error)
                }
            })
    }

    predictPrice(): void {
        this.http.put<any>('http://localhost:5000/real_estate_predictor/prediction', this.processedInput)
            .subscribe({
                next: (response) => {
                    this.getPrice()
                },
                error: (error) => {
                    console.error("Couldn't predict price due to ", error)
                }
            })
    }

    getPrice(): void {
        this.http.get<any>('http://localhost:5000/real_estate_predictor/prediction')
            .subscribe({
                next: (response) => {
                    this.realEstateApp.result = response['price_in_lacs']
                },
                error: (error) => {
                    console.error("Couldn't retrieve price due to ", error)
                }
            })
    }

    getInputData(): void {
        for (let column of this.columns) {
            this.inputData[column] = this.selectedOption[column]
        }
    }

    customSearch(term: string, item: any): boolean {
        return item.toString().toLowerCase().includes(term.toLowerCase())
    }
}
