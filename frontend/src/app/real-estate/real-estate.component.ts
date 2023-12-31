import { Component } from '@angular/core';

@Component({
  selector: 'app-real-estate',
  template: `
    <div class="container">
      <div class="row">
        <div
          class="col-md-6 col-sm-10 offset-md-3 offset-sm-1 d-flex justify-content-center"
        >
          <app-nav></app-nav>
        </div>
      </div>
      <div class="row title-row">
        <div class="col-md-6 col-sm-10 offset-md-3 offset-sm-1 text-center">
          <app-real-estate-title></app-real-estate-title>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-10 offset-md-3 offset-sm-1">
          <app-real-estate-input></app-real-estate-input>
        </div>
      </div>
      <div class="row result-row">
        <div class="col-md-6 col-sm-10 offset-md-3 offset-sm-1 text-center">
          <app-real-estate-result></app-real-estate-result>
        </div>
      </div>
    </div>

  `,
  styles: [`
    .title-row {
      height: 20%;
      align-items: center;
    }

    .result-row {
      height: 15%;
      align-items: center;
    }

  `],
})
export class RealEstateComponent {}

