import { Component, Input, OnInit } from '@angular/core';
import { GCookieService } from '../../global/g-global.module';

/**
 * Utility Pin Component
 * Dependent of GCookieService
 * On click toggles the pin and saves a cookie thru GCookieService.
 * @export
 * @class GUtilityPinComponent
 * @implements {OnInit}
 * @Input {string} utilityPinId id used as the cookie key
 */

@Component({
    selector: 'gs-utility-pin',
    templateUrl: './g-utility-pin.component.html',
    styles: [`
    `]
})

export class GUtilityPinComponent implements OnInit {

    @Input() utilityPinId: string;

    isPinned: boolean = false;
    currentClasses: any = {};

    onClick() {
        this.toggle();
    }

    setCurrentClasses() {
        this.currentClasses = {
            'g-utility-pin': true,
            'g-utility-pin--pinned': this.isPinned
        };
    }

    constructor(private cookieService: GCookieService) { }

    ngOnInit() {
        if (!this.utilityPinId) {
            console.warn('GUtilityPinComponent must have set a utilityPinId.');
        }
        this.isPinned = this.cookieService.get(this.utilityPinId) === 'true';
        this.setCurrentClasses();
    }

    toggle(value?: boolean) {
        this.updatePin(value);
    }

    updatePin(value?: boolean) {
        if (value === undefined) {
            value = this.cookieService.get(this.utilityPinId) !== 'true';
        }
        this.isPinned = value;
        this.cookieService.set(this.utilityPinId, this.isPinned.toString());
        this.setCurrentClasses();
    }
}
