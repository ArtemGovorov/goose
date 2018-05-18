import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { GUtilityPinComponent } from './g-utility-pin.component';
import { GCookieService } from '../../global/g-global.module';
import { GUtils } from '../../global/services/g-utils';
import { GError } from '../../global/services/g-error.service';
import { MockGCookieService } from './g-utility-slider.component.spec';

describe('GUtilityPinComponent component   ', () => {
    let fixture: ComponentFixture<GUtilityPinComponent>;
    let service: GCookieService;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GUtilityPinComponent],
            providers: [{provide: GCookieService, useClass: MockGCookieService}, GUtils, GError],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GUtilityPinComponent);
        fixture.componentInstance.utilityPinId = 'test';
        fixture.componentInstance.ngOnInit();
        fixture.detectChanges();
        service = fixture.debugElement.injector.get(GCookieService);

        el = fixture.debugElement.nativeElement; // html element
    });

    it('should render...', () => {
        expect(GUtilityPinComponent).toBeDefined();
    });

    it('should cope with no utilityPinId being set...', () => {
        fixture.componentInstance.utilityPinId = null;
        fixture.componentInstance.ngOnInit();
        fixture.detectChanges();
        const utilityPin = el.querySelector('.g-utility-pin') as HTMLElement;
        expect(utilityPin).toBeTruthy();
    });

    it('on click icon should call toggle method...', () => {
        spyOn(fixture.componentInstance, 'onClick').and.callThrough();
        spyOn(fixture.componentInstance, 'toggle');

        let icon = fixture.nativeElement.querySelector('gs-icon');
        icon.click();
        expect(fixture.componentInstance.onClick).toHaveBeenCalled();
        expect(fixture.componentInstance.toggle).toHaveBeenCalled();
    });

    it('on click should call updatePin method and update style...', () => {
        spyOn(fixture.componentInstance, 'toggle').and.callThrough();
        spyOn(fixture.componentInstance, 'updatePin').and.callThrough();
        spyOn(fixture.componentInstance, 'setCurrentClasses');

        let icon = fixture.nativeElement.querySelector('gs-icon');
        icon.click();
        expect(fixture.componentInstance.toggle).toHaveBeenCalled();
        expect(fixture.componentInstance.updatePin).toHaveBeenCalled();
        expect(fixture.componentInstance.isPinned).toBe(true);
        expect(fixture.componentInstance.setCurrentClasses).toHaveBeenCalled();
    });

    it('on updatePin should call service method set...', () => {
        spyOn(fixture.componentInstance, 'updatePin').and.callThrough();
        spyOn(service, 'set');

        let icon = fixture.nativeElement.querySelector('gs-icon');
        icon.click();
        expect(fixture.componentInstance.updatePin).toHaveBeenCalled();
        expect(service.set).toHaveBeenCalled();
        expect(service.set).toHaveBeenCalledWith('test', 'true');
    });

});
