import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { GIconComponent } from '../../global/components/icon/g-icon.component';
import { GUtilityTriggerComponent } from './g-utility-trigger.component';
import { GUtils } from '../../global/services/g-utils';
import {
    GUtilityService,
    IGUtilitySlider
} from './g-utility.service';
import { GError } from '../../global/services/g-error.service';
import { MockGUtilityService } from './g-utility-slider.component.spec';

describe('GUtilityTriggerComponent component   ', () => {
    let fixture: ComponentFixture<GUtilityTriggerComponent>;
    let service: GUtilityService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GUtilityTriggerComponent, GIconComponent],
            providers: [
                { provide: GUtilityService, useClass: MockGUtilityService },
                GUtils,
                GError
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GUtilityTriggerComponent);
        fixture.componentInstance.utilitySliderId = 'test';
        fixture.componentInstance.triggerIcon = 'bell';
        fixture.componentInstance.ngOnInit();
        fixture.detectChanges();
        service = fixture.debugElement.injector.get(GUtilityService);
    });

    it('should render...', () => {
        expect(fixture.componentInstance.isSliderOpen).toBe(false);
        expect(GUtilityTriggerComponent).toBeDefined();
    });

    it('should have one specific icon...', () => {
        let icons = fixture.nativeElement.querySelectorAll('gs-icon');
        expect(icons.length).toBe(1);
        expect(icons[0].firstChild.className).toContain('bell');
    });

    it('should have two icons if triggerOpenIcon set...', () => {
        fixture.componentInstance.triggerOpenIcon = 'bell';
        fixture.componentInstance.ngOnInit();
        fixture.detectChanges();

        let icons = fixture.nativeElement.querySelectorAll('gs-icon');
        expect(icons.length).toBe(2);
        expect(icons[0].firstChild.className).toContain('bell');
        expect(icons[1].firstChild.className).toContain('cross');
    });

    it('should have a specific close icon...', () => {
        fixture.componentInstance.triggerOpenIcon = 'bell';
        fixture.componentInstance.triggerCloseIcon = 'box';
        fixture.componentInstance.setCurrentClasses();
        fixture.detectChanges();

        let icons = fixture.nativeElement.querySelectorAll('gs-icon');
        expect(icons.length).toBe(2);
        expect(icons[1].firstChild.className).toContain('box');
    });

    it('on click icon should call toggle method...', () => {
        spyOn(fixture.componentInstance, 'onClick').and.callThrough();
        spyOn(fixture.componentInstance, 'toggle');

        let icon = fixture.nativeElement.querySelector('gs-icon');
        icon.click();
        expect(fixture.componentInstance.onClick).toHaveBeenCalled();
        expect(fixture.componentInstance.toggle).toHaveBeenCalled();
    });

    it('if close on click should call open method and update style...', () => {
        spyOn(fixture.componentInstance, 'onClick').and.callThrough();
        spyOn(fixture.componentInstance, 'open').and.callThrough();
        spyOn(fixture.componentInstance, 'setCurrentClasses');

        let icon = fixture.nativeElement.querySelector('gs-icon');
        icon.click();
        expect(fixture.componentInstance.onClick).toHaveBeenCalled();
        expect(fixture.componentInstance.open).toHaveBeenCalled();
        expect(fixture.componentInstance.isSliderOpen).toBe(true);
        expect(fixture.componentInstance.setCurrentClasses).toHaveBeenCalled();
    });

    it('on toggle should call service method...', () => {
        spyOn(fixture.componentInstance, 'toggle').and.callThrough();
        spyOn(service, 'openSlider');

        let icon = fixture.nativeElement.querySelector('gs-icon');
        icon.click();
        expect(fixture.componentInstance.toggle).toHaveBeenCalled();
        expect(service.openSlider).toHaveBeenCalled();
        expect(service.openSlider).toHaveBeenCalledWith('test');
        service.closeSlider(fixture.componentInstance.utilitySliderId);
        expect(fixture.componentInstance.isSliderOpen).toBe(false);
    });

    it('on service data change call updateTrigger...', () => {
        spyOn(fixture.componentInstance, 'updateTrigger').and.callThrough();
        let slider = <IGUtilitySlider>{
            id: fixture.componentInstance.utilitySliderId,
            status: 1
        };
        expect(fixture.componentInstance.isSliderOpen).toBe(false);
        service.setData(slider);

        expect(fixture.componentInstance.updateTrigger).toHaveBeenCalledWith(slider);
        expect(fixture.componentInstance.isSliderOpen).toBe(true);
    });

    it('should cope with no utilitySliderId being set...', () => {
        spyOn(fixture.componentInstance, 'updateTrigger').and.callThrough();
        fixture.componentInstance.utilitySliderId = null;
        let slider = <IGUtilitySlider>{
            id: fixture.componentInstance.utilitySliderId,
            status: 1
        };
        
        service.setData(slider);
        expect(fixture.componentInstance.updateTrigger).toHaveBeenCalledWith(slider);
    });

});
