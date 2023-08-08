import { Component } from '@angular/core';
import { LangDetectAppService } from '../lang-detect-app.service';

@Component({
    selector: 'app-lang-detect-result',
    templateUrl: './lang-detect-result.component.html',
    styleUrls: ['./lang-detect-result.component.css'],
})
export class LangDetectResultComponent {
    constructor(public langDetectApp: LangDetectAppService) {}
}
