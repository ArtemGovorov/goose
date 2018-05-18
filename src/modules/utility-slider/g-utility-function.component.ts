import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { GError } from '../../global/services/g-error.service';

@Component({
    selector: 'gs-utility-function',
    templateUrl: './g-utility-function.component.html'
})
export class GUtilityFunctionComponent extends BaseComponent {

    @Input() sidePadding: boolean = true;

    currentClasses: any = {};

    setCurrentClasses() {
        this.currentClasses['g-utility__function'] = true;
        this.currentClasses['g-utility__function__padding'] = this.sidePadding;
    }

    constructor(protected _errorService: GError) {
        super(_errorService);
    }

    ngOnInit() {
        this.setCurrentClasses();
    }
}
