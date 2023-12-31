import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="navbar navbar-expand-lg">
      <div class="card">
        <div class="card-body">
          <a routerLink="/home" class="navbar-brand">My AI</a>
        </div>
      </div>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" routerLink="/lang-detect">Language Detector</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/real-estate">Real Estate Predictor</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/tic-tac-toe">Tic Tac Toe</a>
        </li>
      </ul>
    </nav>

  `,
  styles: [`
    .nav-link {
      margin-left: 10px;
    }

  `],
})
export class NavComponent {}

