import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GLinkComponent } from './g-link.component';
import { GUtils } from '../../../global/services/g-utils';
import { GError } from '../../../global/services/g-error.service';

describe('GLinkComponent component', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [GLinkComponent],
            providers: [GUtils, GError],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
    });

    it('should render...', () => {
        const fixture = TestBed.createComponent(GLinkComponent);
        fixture.detectChanges();
        expect(GLinkComponent).toBeDefined();
    });

    it('should set a class with href', () => {
        const fixture = TestBed.createComponent(GLinkComponent);
        fixture.componentInstance.href = 'http://google.com';
        fixture.componentInstance.klass = 'link';
        fixture.detectChanges();

        let el = fixture.nativeElement.querySelectorAll('.link');
        expect(el).not.toBeNull();
    });

    it('should set a class with routerLink', () => {
        const fixture = TestBed.createComponent(GLinkComponent);
        fixture.componentInstance.routerLink = '/avatar/basic';
        fixture.componentInstance.klass = 'link';
        fixture.detectChanges();

        let el = fixture.nativeElement.querySelector('.link');
        expect(el).not.toBeNull();
        expect(el.getAttribute('ng-reflect-router-link')).toEqual('/avatar/basic');
    });

    it('should call goToSpecificUrl when no routerLink set', () => {
        const fixture = TestBed.createComponent(GLinkComponent);
        const goToSpecificUrlSpy = spyOn(fixture.componentInstance, 'goToSpecificUrl');

        fixture.componentInstance.routerLink = '';
        fixture.componentInstance.href = 'http://google.com';
        fixture.componentInstance.klass = 'link';
        fixture.componentInstance.ngOnInit();
        fixture.detectChanges();

        fixture.componentInstance.goToSpecificUrl(new Event('click'));
        let el = fixture.nativeElement.querySelectorAll('.link');
        expect(el).not.toBeNull();
        expect(goToSpecificUrlSpy).toHaveBeenCalled();
    });
});
