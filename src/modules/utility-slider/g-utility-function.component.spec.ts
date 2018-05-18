import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { GUtilityFunctionComponent } from './g-utility-function.component';
import { GUtils } from '../../global/services/g-utils';
import { GError } from '../../global/services/g-error.service';

describe('GUtilityFunctionComponent component   ', () => {
    let fixture: ComponentFixture<GUtilityFunctionComponent>;
    let comp: GUtilityFunctionComponent;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GUtilityFunctionComponent],
            providers: [
                GUtils,
                GError
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        TestBed.compileComponents();

        fixture = TestBed.createComponent(GUtilityFunctionComponent);

        comp = fixture.componentInstance; // test instance
        de = fixture.debugElement; // debug element
        el = de.nativeElement; // html element
    }));

    it('should render...', () => {
        comp.setCurrentClasses();
        fixture.detectChanges();
        expect(GUtilityFunctionComponent).toBeDefined();
        const utilityFunction = el.querySelector('.g-utility__function') as HTMLElement;
        expect(utilityFunction).toBeTruthy();
    });

});
