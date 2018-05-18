import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { GUtilityFooterComponent } from './g-utility-footer.component';
import { GUtils } from '../../global/services/g-utils';
import { GError } from '../../global/services/g-error.service';

describe('GUtilityFooterComponent component   ', () => {
    let fixture: ComponentFixture<GUtilityFooterComponent>;
    let comp: GUtilityFooterComponent;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GUtilityFooterComponent],
            providers: [
                GUtils,
                GError
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        TestBed.compileComponents();

        fixture = TestBed.createComponent(GUtilityFooterComponent);

        comp = fixture.componentInstance; // test instance
        de = fixture.debugElement; // debug element
        el = de.nativeElement; // html element
    }));

    it('should render...', () => {
        expect(GUtilityFooterComponent).toBeDefined();
        const utilityFooter = el.querySelector('.g-utility__buttons') as HTMLElement;
        expect(utilityFooter).toBeTruthy();
    });

});
