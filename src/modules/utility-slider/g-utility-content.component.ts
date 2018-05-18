import { Component } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { GError } from '../../global/services/g-error.service';

@Component({
    selector: 'gs-utility-content',
    templateUrl: './g-utility-content.component.html'
})
export class GUtilityContentComponent extends BaseComponent {

    constructor(protected _errorService: GError) {
        super(_errorService);
    }
}

@Component({
    selector: 'gs-utility-content-divider',
    template: `<div class="g-utility__divider"><ng-content></ng-content></div>`
})
export class GUtilityContentDividerComponent { }

@Component({
    selector: 'gs-utility-content-results',
    template: `<div class="g-utility__content__results"><ng-content></ng-content></div>`
})
export class GUtilityContentResultsComponent { }
