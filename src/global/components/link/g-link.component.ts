import { Component, Input, OnInit } from '@angular/core';
import { GError } from '../../../global/services/g-error.service';
import { BaseComponent } from '../../../base.component';
import { GUtils } from '../../../global/services/g-utils';

@Component({
    selector: 'gs-link',
    templateUrl: './g-link.component.html'
})

export class GLinkComponent extends BaseComponent implements OnInit {

    @Input() href: string = '';
    @Input() routerLink: string = '';
    @Input() label: string = '';
    @Input() klass: string = '';

    public isRouterLink: boolean;

    constructor(protected _utils: GUtils, protected _errorService: GError) {
        super(_errorService);
    }

    ngOnInit(): void {
        this.isRouterLink = this._utils.isNotEmptyString(this.routerLink);
    }

    goToSpecificUrl(event: Event): void {
        event.preventDefault();
        window.location.href = this.href;
    }

}
