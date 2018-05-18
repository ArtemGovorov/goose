import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

/**
 * Utility Service
 * Service to handle sliders, triggers open/close state
 * @export
 * @class GUtilityService
 * @param {BehaviorSubject} subject property of service to subscribe for slider info changes
 * @protected @param {Array} sliders array of IUtilitySlider with the latest slider information
 */

@Injectable()
export class GUtilityService {
    public dataChange: Observable<IGUtilitySlider>;
    protected subject = new BehaviorSubject<IGUtilitySlider>({
        id: '0',
        side: '',
        status: 0,
        group: null,
        triggerClicked: false
    });
    protected sliders: any = [];

    constructor() {
        this.dataChange = this.subject.asObservable();
    }

    isSliderOpen(id: string) {
        return this.getSlider(id).status === 1;
    }

    closeSlider(id: string) {
        let slider = this.getSlider(id);
        slider.status = 0;
        this.setData(slider);
    }

    /**
     * Open a slider based on the id provided.
     * Checks to see if any other slider is open on the same side and closes it.
     * @param {string} id utilitySliderId of the GUtilitySliderComponent and GUtilityTriggerComponent
     */
    openSlider(id: string) {
        const slider = this.getSlider(id);
        const openedSliders = this.sliders.filter(s => s.group !== 'none' && s.status === 1 && s.group === slider.group && s.side === slider.side);
        if (openedSliders.length) {
            openedSliders.forEach(s => this.closeSlider(s.id));
        }
        slider.status = 1;
        this.setData(slider);
    }

    /**
     * Saves the information of a slider in the service.
     * Can be used to also update the information of an existing slider.
     * Calles setData method of the service
     * @param {string} id utilitySliderId of the GUtilitySliderComponent and GUtilityTriggerComponent
     * @param {string} [side] side that the GUtilitySliderComponent will show
     * @param {boolean} [isopen] if the GUtilitySliderComponent is open on init
     * @param {string} [parentId] the id of the parent element for the slider
     * @returns {IUtilitySlider} returns the new information of the slider
     */
    setSlider(id: string, side?: string, isopen?: boolean, group?: string): IGUtilitySlider {
        let slider = this.sliders.find(s => s.id === id);
        const status = isopen ? 1 : 0;
        if (!slider) {
            slider = { id: id, side: side, status: status, group: group };
            this.sliders.push(slider);
        } else {
            slider.side = side;
            slider.status = status;
            slider.group = group;
        }
        this.setData(slider);
        return slider;
    }

    /**
     * Method that updates an observer to log the slider/trigger info changes.
     * @param {IGUtilitySlider} slider the updated information stored for a slider in the service
     * @returns an Observer that logs all the slider info changes
     */
    setData(slider: IGUtilitySlider) {
        this.subject.next(slider);
    }

    /**
     * Returns the slider info base on id.
     * @param {string} id utilitySliderId of the GUtilitySliderComponent and GUtilityTriggerComponent
     * @returns {IUtilitySlider} returns the information of the slider
     */
    getSlider(id: string): IGUtilitySlider {
        let slider: IGUtilitySlider = this.sliders.find(s => s.id === id);
        if (!slider) {
            slider = this.setSlider(id);
        }
        return slider;
    }
}

export interface IGUtilitySlider {
    id: string;
    side: string; // right, left
    status: number; // 0-close, 1-open
    group: string;
    triggerClicked: boolean;
}
