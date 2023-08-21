import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-lang-detect-input',
  template: `
    <div class="form-group">
      <label for="text">Enter Text:</label>
      <textarea
        class="form-control top-spacing"
        id="text"
        [(ngModel)]="textInput"
        (input)="sendInput()"
      ></textarea>
    </div>
    <div class="alert alert-warning" *ngIf="!isValidLength()">
      Please enter atleast {{ minCharacters }} characters
    </div>

  `,
  styles: [`

  `],
})
export class LangDetectInputComponent {
  textInput: string = '';
  minCharacters: number = 20;

  constructor(private languageService: LanguageService) {}

  isValidLength(): boolean {
    return (
      this.textInput.trim().replaceAll(/\s+/g, ' ').length >= this.minCharacters
    );
  }

  sendInput(): void {
    if (!this.isValidLength()) {
      return;
    }
    this.languageService.detectLanguage(this.textInput);
  }
}

