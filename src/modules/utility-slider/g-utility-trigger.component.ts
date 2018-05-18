import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { GUtilityService } from './g-utility.service';
import { GUtils } from '../../global/services/g-utils';

/**
 * Utility Trigger component
 * Dependent of GUtilityService
 * Icon that on click toogles the state of a slider.
 * The trigger can use the same icon for both states or different icons for open and close.
 * @export
 * @class GUtilityTriggerComponent
 * @implements {OnInit}
 * @Input {string} utilitySliderId id that linkes the trigger to the slider, service and pin
 * @Input {string} triggerIcon name of the icon for the trigger
 * @Input {string} triggerIconSize by default is medium check Goose Icon Size for more options
 * @Input {string} triggerIconStatus by default basic icon check Goose Icon for more options (alert, primary)
 * @Input {string} triggerOpenIcon name of icon for open toggle
 * @Input {string} triggerCloseIcon name of icon for close toggle by default is cross if you have set a triggerOpenIcon
 */

@Component({
    selector: 'gs-utility-trigger',
    templateUrl: './g-utility-trigger.component.html',
    styles: [`
    /deep/ .g-utility-toggle.g-utility-toggle--open .g-icon:first-child {
        display: initial;
    }
    .g-utility-toggle gs-icon:nth-child(2) {
        display: none;
    }
    .g-utility-toggle.g-utility-toggle--open gs-icon:nth-child(2) {
        display: initial;
    }
    .g-utility-toggle.g-utility-toggle--open gs-icon:first-child {
        display: none;
    }
    `]
})

export class GUtilityTriggerComponent implements OnInit, OnDestroy {

    @Input() utilitySliderId: string;
    @Input() triggerIcon: string;
    @Input() triggerIconSize: string;
    @Input() triggerIconStatus: string;
    @Input() triggerIconClass: any; // similar to ngClass
    @Input() triggerOpenIcon: string;
    @Input() triggerCloseIcon: string;

    isSliderOpen: boolean = false;
    wrapClasses: any = {};
    iconClasses: any = {};
    subscription: any;

    onClick() {
        let slider = this.utilityService.getSlider(this.utilitySliderId);
        slider.triggerClicked = true;
        this.toggle();
    }

    setCurrentClasses() {
        const toggleClasses = {
            'g-utility-toggle': !!this.triggerCloseIcon,
            'g-utility-toggle--open': this.isSliderOpen
        };

        this._utils.tagClass(this.triggerIconClass, this.iconClasses);

        if (!this.triggerCloseIcon) {
            this.wrapClasses = { 'g-inherit': true };
            Object.assign(this.iconClasses, toggleClasses);
        } else {
            Object.assign(this.wrapClasses, toggleClasses);
        }
    }

    constructor( private utilityService: GUtilityService, protected _utils: GUtils) { }

    ngOnInit() {
        if (!this.utilitySliderId) {
            console.warn('GUtilityTriggerComponent must have set a utilitySliderId.');
        }
        this.isSliderOpen = this.utilityService.isSliderOpen(this.utilitySliderId);
        this.subscription = this.utilityService.dataChange
                                    .filter(slider => slider.id === this.utilitySliderId)
                                    .subscribe( slider => this.updateTrigger(slider));

        if (this.triggerOpenIcon) {
            this.triggerIcon = this.triggerOpenIcon;
            if (!this.triggerCloseIcon) {
                this.triggerCloseIcon = 'cross';
            }
        }
        this.setCurrentClasses();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    open() {
        if (!this.utilityService.isSliderOpen(this.utilitySliderId)) {
            this.utilityService.openSlider(this.utilitySliderId);
            this.isSliderOpen = true;
            this.setCurrentClasses();
        }
    }

    close() {
        if (this.utilityService.isSliderOpen(this.utilitySliderId)) {
            this.utilityService.closeSlider(this.utilitySliderId);
            this.isSliderOpen = false;
            this.setCurrentClasses();
        }
    }

    toggle() {
        if (this.utilityService.isSliderOpen(this.utilitySliderId)) {
            this.close();
        } else {
            this.open();
        }
    }

    updateTrigger(slider: any) {
        this.isSliderOpen = !!slider.status;
        this.setCurrentClasses();
    }
}
