import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { GUtils } from '../../global/services/g-utils';
import { GUtilityPinComponent } from './g-utility-pin.component';
import { GUtilitySliderComponent } from './g-utility-slider.component';
import { GCookieService } from '../../global/g-global.module';
import {
    GUtilityService,
    IGUtilitySlider
} from './g-utility.service';
import { GError } from '../../global/services/g-error.service';

export class MockGUtilityService extends GUtilityService {
    mockSlider = {
        id: 'test',
        side: 'left',
        status: 0
    };

    constructor() {
        super();
    }

    setData(slider: any) {
        this.subject.next(slider);
    }
}

export class MockGCookieService extends GCookieService {
    mockCookies = {};

    get(key: string) {
        return this.mockCookies[key] || 'false';
    }

    set(key: string, value: string) {
        this.mockCookies[key] = value;
    }
}

describe('GUtilitySliderComponent component   ', () => {
    let fixture: ComponentFixture<GUtilitySliderComponent>;
    let service: GUtilityService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GUtilitySliderComponent, GUtilityPinComponent],
            providers: [
                {provide: GUtilityService, useClass: MockGUtilityService },
                {provide: GCookieService, useClass: MockGCookieService},
                GUtils,
                GError
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GUtilitySliderComponent);
        fixture.componentInstance.utilitySliderId = 'test';
        fixture.componentInstance.sliderSize = 'small';
        fixture.detectChanges();
        service = fixture.debugElement.injector.get(GUtilityService);
    });

    it('should render...', () => {
        expect(GUtilitySliderComponent).toBeDefined();
    });

    it('on service data change call updateSlider...', () => {
        spyOn(fixture.componentInstance, 'updateSlider').and.callThrough();
        let slider = <IGUtilitySlider> {
            id: fixture.componentInstance.utilitySliderId,
            status: 1
        };
        expect(fixture.componentInstance.isSliderOpen).toBe(false);
        service.setData(slider);
        expect(fixture.componentInstance.updateSlider).toHaveBeenCalled();
        expect(fixture.componentInstance.updateSlider).toHaveBeenCalledWith(slider);
        expect(fixture.componentInstance.isSliderOpen).toBe(true);
    });

    it('on toggle should call service method...', () => {
        spyOn(fixture.componentInstance, 'toggle').and.callThrough();
        spyOn(service, 'openSlider');
        service.openSlider(fixture.componentInstance.utilitySliderId);
        fixture.componentInstance.toggle();
        expect(fixture.componentInstance.toggle).toHaveBeenCalled();
        expect(service.openSlider).toHaveBeenCalled();

        service.closeSlider(fixture.componentInstance.utilitySliderId);
        expect(fixture.componentInstance.isSliderOpen).toBe(false);
    });

    it('should call checkClickOutside method...', () => {
        spyOn(fixture.componentInstance, 'checkClickOutside').and.callThrough();
        spyOn(service, 'openSlider');
        service.openSlider(fixture.componentInstance.utilitySliderId);
        fixture.componentInstance.checkClickOutside();
        expect(fixture.componentInstance.checkClickOutside).toHaveBeenCalled();
        expect(service.openSlider).toHaveBeenCalled();
    });

});
