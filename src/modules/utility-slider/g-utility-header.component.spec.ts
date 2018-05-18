import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { GIconComponent } from '../../global/components/icon/g-icon.component';
import { GUtilityHeaderComponent } from './g-utility-header.component';
import { GUtils } from '../../global/services/g-utils';
import { GUtilityService } from './g-utility.service';
import { GError } from '../../global/services/g-error.service';
import { MockGUtilityService } from './g-utility-slider.component.spec';

describe('GUtilityHeaderComponent component   ', () => {
    let fixture: ComponentFixture<GUtilityHeaderComponent>;
    let service: GUtilityService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GUtilityHeaderComponent, GIconComponent],
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
        fixture = TestBed.createComponent(GUtilityHeaderComponent);
        fixture.componentInstance.utilitySliderId = 'test';
        fixture.detectChanges();
        service = fixture.debugElement.injector.get(GUtilityService);
    });

    it('should render...', () => {
        expect(GUtilityHeaderComponent).toBeDefined();
    });

    it('if close button is clicked should call method...', () => {
        spyOn(fixture.componentInstance, 'onClick').and.callThrough();

        let icon = fixture.nativeElement.querySelector('span');
        icon.click();
        expect(fixture.componentInstance.onClick).toHaveBeenCalled();
    });
});
