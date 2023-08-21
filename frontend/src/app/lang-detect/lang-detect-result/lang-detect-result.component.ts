import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-lang-detect-result',
  template: `
    <div class="alert alert-info" *ngIf="languageService.getLanguage()">
      {{ "This text is in " + languageService.getLanguage() }}
    </div>

  `,
  styles: [`

  `],
})
export class LangDetectResultComponent {
  constructor(public languageService: LanguageService) {}
}

