import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
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
          <app-home-title></app-home-title>
        </div>
      </div>
      <div class="row content-row">
        <div class="col-md-6 col-sm-10 offset-md-3 offset-sm-1 text-center">
          <app-home-content></app-home-content>
        </div>
      </div>
    </div>

  `,
  styles: [`
    .title-row {
      height: 35%;
      align-items: center;
    }

    .content-row {
      height: 25%;
    }

  `],
})
export class HomeComponent {}

