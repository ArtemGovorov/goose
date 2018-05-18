import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { GUtilityContentComponent } from './g-utility-content.component';
import { GUtils } from '../../global/services/g-utils';
import { GError } from '../../global/services/g-error.service';

describe('GUtilityContentComponent component   ', () => {
    let fixture: ComponentFixture<GUtilityContentComponent>;
    let comp: GUtilityContentComponent;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GUtilityContentComponent],
            providers: [
                GUtils,
                GError
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        TestBed.compileComponents();

        fixture = TestBed.createComponent(GUtilityContentComponent);

        comp = fixture.componentInstance; // test instance
        de = fixture.debugElement; // debug element
        el = de.nativeElement; // html element
    }));

    it('should render...', () => {
        expect(GUtilityContentComponent).toBeDefined();
        const utilityContent = el.querySelector('.g-utility__content') as HTMLElement;
        expect(utilityContent).toBeTruthy();
    });

});
