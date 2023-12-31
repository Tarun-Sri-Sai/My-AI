import { Component } from '@angular/core';

@Component({
  selector: 'app-lang-detect',
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
          <app-lang-detect-title></app-lang-detect-title>
        </div>
      </div>
      <div class="row content-row">
        <div class="col-md-6 col-sm-10 offset-md-3 offset-sm-1">
          <app-lang-detect-input></app-lang-detect-input>
        </div>
      </div>
      <div class="row content-row">
        <div class="col-md-6 col-sm-10 offset-md-3 offset-sm-1 text-center">
          <app-lang-detect-result></app-lang-detect-result>
        </div>
      </div>
    </div>

  `,
  styles: [`
    .title-row {
      height: 20%;
      align-items: center;
    }

    .content-row {
      height: 25%;
    }

  `],
})
export class LangDetectComponent {}

