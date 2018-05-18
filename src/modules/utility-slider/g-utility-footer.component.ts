import { Component } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { GError } from '../../global/services/g-error.service';

@Component({
    selector: 'gs-utility-footer',
    templateUrl: './g-utility-footer.component.html'
})
export class GUtilityFooterComponent extends BaseComponent {

    constructor(protected _errorService: GError) {
        super(_errorService);
    }
}
