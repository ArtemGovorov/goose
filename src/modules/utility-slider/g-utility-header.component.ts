import { Component, Input } from '@angular/core';
import { GUtilityService } from './g-utility.service';
import { BaseComponent } from '../../base.component';
import { GError } from '../../global/services/g-error.service';

@Component({
    selector: 'gs-utility-header',
    templateUrl: './g-utility-header.component.html'
})
export class GUtilityHeaderComponent extends BaseComponent {

    @Input() utilitySliderId: string;
    @Input() closeIcon: string = 'cross';

    constructor( private utilityService: GUtilityService, protected _errorService: GError) {
        super(_errorService);
    }

    onClick() {
        this.utilityService.closeSlider(this.utilitySliderId);
    }
}
