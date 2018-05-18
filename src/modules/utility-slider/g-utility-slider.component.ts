import {GUtils} from '../../global/services/g-utils';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { GUtilityService } from './g-utility.service';
import { GCookieService } from '../../global/g-global.module';

/**
 * Utility Slider component.
 * Dependent of GUtilityTriggerComponent, GUtilityService and GUtilityPinComponent if sliderHasPin true.
 * On click the conected trigger the slider toggles.
 * If slider has a pin and the cookie for that pin is set to true on the next load of the page the slider will be by default opend.
 * @export
 * @class GUtilitySliderComponent
 * @implements {OnInit}
 * @Input {string} utilitySliderId id that linkes the slider to the trigger, service and pin
 * @Input {string} sliderPosition can by default set to left or right
 * @Input {boolean} sliderHasPin  set true if the slider has a utility pin GUtilityPinComponent
 */

@Component({
    selector: 'gs-utility-slider',
    templateUrl: './g-utility-slider.component.html',
    styles: [`
    `]
})
export class GUtilitySliderComponent implements OnInit, OnDestroy {

    @Input() utilitySliderId: string;
    @Input() sliderPosition: string = 'left';
    @Input() sliderHasPin: boolean = false;
    @Input() sliderGroup: string = 'none';
    @Input() closeOnOutsideClick: boolean = false;
    @Input() sliderClass: any;
    @Input() sliderSize: any;
    @Input() condensedPadding: boolean = false;

    isSliderOpen: boolean = false;
    currentClasses: any = {};
    subscription: any;

    setCurrentClasses() {
        this.currentClasses['g-utility'] = true;
        this.currentClasses['g-utility--' + this.sliderPosition] = true;
        this.currentClasses['g-utility--open'] = this.isSliderOpen;
        this.currentClasses['g-utility--condensed-padding'] = this.condensedPadding;
        if (!!this.sliderSize) {
            this.currentClasses['g-utility--' + this.sliderSize] = true;
        }
        this._utils.tagClass(this.sliderClass, this.currentClasses);
    }

    constructor( private utilityService: GUtilityService, private cookieService: GCookieService, protected _utils: GUtils) { }

    ngOnInit() {
        this.isSliderOpen = this.cookieService.get(this.utilitySliderId) === 'true';
        this.utilityService.setSlider(this.utilitySliderId, this.sliderPosition, this.isSliderOpen, this.sliderGroup);
        this.subscription = this.utilityService.dataChange
                                    .filter(slider => slider.id === this.utilitySliderId)
                                    .subscribe( slider => this.updateSlider(slider));
        this.setCurrentClasses();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    updateSlider(slider: any) {
        this.isSliderOpen = !!slider.status;

        this.setCurrentClasses();
    }

    toggle() {
        if (this.isSliderOpen) {
            this.utilityService.closeSlider(this.utilitySliderId);
        } else {
            this.utilityService.openSlider(this.utilitySliderId);
        }
    }

    checkClickOutside() {
        const isPinned = this.cookieService.get(this.utilitySliderId) === 'true';

        if (this.closeOnOutsideClick && !isPinned) {
            let slider = this.utilityService.getSlider(this.utilitySliderId);
            if (!slider.triggerClicked && slider.status) {
                this.utilityService.closeSlider(this.utilitySliderId);
            }
            slider.triggerClicked = false;
        }
    }
}
