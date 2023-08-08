import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-lang-detect-result',
    templateUrl: './lang-detect-result.component.html',
    styleUrls: ['./lang-detect-result.component.css'],
})
export class LangDetectResultComponent {
    constructor(public languageService: LanguageService) {}
}
