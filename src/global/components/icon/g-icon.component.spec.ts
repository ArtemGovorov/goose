import { GIconComponent } from './g-icon.component';
import { TestBed, async } from '@angular/core/testing';
import { GUtils } from '../../../global/services/g-utils';
import { GError } from '../../services/g-error.service';

describe('GIconComponent component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GIconComponent],
      providers: [GUtils, GError]
    });
    TestBed.compileComponents();
  }));

  describe('when compiled', () => {
    it('should add default g-icon class', () => {
      const fixture = TestBed.createComponent(GIconComponent);
      fixture.detectChanges();

      const iconContainer = fixture.nativeElement.querySelector('span');
      const containerHasIconClass = iconContainer.classList.contains('g-icon');
      expect(containerHasIconClass).toBeTruthy();
    });

    it('should add icon name class from iconName binding', () => {
      const fixture = TestBed.createComponent(GIconComponent);
      const componentInstance = fixture.componentInstance;

      componentInstance.iconName = 'shake';
      fixture.detectChanges();

      const iconContainer = fixture.nativeElement.querySelector('span');
      const containerHasIconNameClass = iconContainer.classList.contains('g-icon-shake');
      expect(containerHasIconNameClass).toBeTruthy();
    });

    it('should add icon size class from iconSize binding', () => {
      const fixture = TestBed.createComponent(GIconComponent);
      const componentInstance = fixture.componentInstance;

      componentInstance.iconSize = 'tiny';
      fixture.detectChanges();

      const iconContainer = fixture.nativeElement.querySelector('span');
      const containerHasIconSizeClass = iconContainer.classList.contains('g-icon--tiny');
      expect(containerHasIconSizeClass).toBeTruthy();
    });

    it('should add icon status class from iconStatus binding', () => {
      const fixture = TestBed.createComponent(GIconComponent);
      const componentInstance = fixture.componentInstance;

      componentInstance.iconStatus = 'primary';
      fixture.detectChanges();

      const iconContainer = fixture.nativeElement.querySelector('span');
      const containerHasIconStatusClass = iconContainer.classList.contains('g-icon--primary');
      expect(containerHasIconStatusClass).toBeTruthy();
    });

    describe('when iconClass binding is single value', () => {
      it('should add given class from binding', () => {
        const fixture = TestBed.createComponent(GIconComponent);
        const componentInstance = fixture.componentInstance;

        componentInstance.iconClass = 'single-class-value';
        fixture.detectChanges();

        const iconContainer = fixture.nativeElement.querySelector('span');
        const containerHasGivenClass = iconContainer.classList.contains('single-class-value');
        expect(containerHasGivenClass).toBeTruthy();
      });
    });

    describe('when iconClass binding is array of values', () => {
      it('should add given classes from binding', () => {
        const fixture = TestBed.createComponent(GIconComponent);
        const componentInstance = fixture.componentInstance;

        const arrayOfClasses = ['first-class-value', 'second-class-value'];
        componentInstance.iconClass = arrayOfClasses;
        fixture.detectChanges();

        const iconContainer = fixture.nativeElement.querySelector('span');

        const containerHasGivenClasses = arrayOfClasses.every(className => {
          return iconContainer.classList.contains(className);
        });
        expect(containerHasGivenClasses).toBeTruthy();
      });
    });
  });

  describe('when iconName value changed', () => {

    it('should remove old value from container classes', () => {
      const fixture = TestBed.createComponent(GIconComponent);
      const componentInstance = fixture.componentInstance;
      componentInstance.iconName = 'shake';
      fixture.detectChanges();

      componentInstance.iconName = 'eye';
      componentInstance.ngOnChanges();
      fixture.detectChanges();

      const iconContainer = fixture.nativeElement.querySelector('span');
      const containerHasOldIconNameClass = iconContainer.classList.contains('g-icon-shake');
      expect(containerHasOldIconNameClass).toBeFalsy();
    });

    it('should add new value to container classes', () => {
      const fixture = TestBed.createComponent(GIconComponent);
      const componentInstance = fixture.componentInstance;
      componentInstance.iconName = 'shake';
      fixture.detectChanges();

      componentInstance.iconName = 'eye';
      componentInstance.ngOnChanges();
      fixture.detectChanges();

      const iconContainer = fixture.nativeElement.querySelector('span');
      const containerHasNewIconNameClass = iconContainer.classList.contains('g-icon-eye');
      expect(containerHasNewIconNameClass).toBeTruthy();
    });
  });

  describe('when iconSize value changed', () => {

    it('should remove old value from container classes', () => {
      const fixture = TestBed.createComponent(GIconComponent);
      const componentInstance = fixture.componentInstance;
      componentInstance.iconSize = 'tiny';
      fixture.detectChanges();

      componentInstance.iconSize = 'massive';
      componentInstance.ngOnChanges();
      fixture.detectChanges();

      const iconContainer = fixture.nativeElement.querySelector('span');
      const containerHasOldIconNameClass = iconContainer.classList.contains('g-icon--tiny');
      expect(containerHasOldIconNameClass).toBeFalsy();
    });

    it('should add new value to container classes', () => {
      const fixture = TestBed.createComponent(GIconComponent);
      const componentInstance = fixture.componentInstance;
      componentInstance.iconSize = 'tiny';
      fixture.detectChanges();

      componentInstance.iconSize = 'massive';
      componentInstance.ngOnChanges();
      fixture.detectChanges();

      const iconContainer = fixture.nativeElement.querySelector('span');
      const containerHasNewIconNameClass = iconContainer.classList.contains('g-icon--massive');
      expect(containerHasNewIconNameClass).toBeTruthy();
    });
  });

  describe('when iconStatus value changed', () => {

    it('should remove old value from container classes', () => {
      const fixture = TestBed.createComponent(GIconComponent);
      const componentInstance = fixture.componentInstance;
      componentInstance.iconStatus = 'primary';
      fixture.detectChanges();

      componentInstance.iconStatus = 'alert';
      componentInstance.ngOnChanges();
      fixture.detectChanges();

      const iconContainer = fixture.nativeElement.querySelector('span');
      const containerHasOldIconStatusClass = iconContainer.classList.contains('g-icon--primary');
      expect(containerHasOldIconStatusClass).toBeFalsy();
    });

    it('should add new value to container classes', () => {
      const fixture = TestBed.createComponent(GIconComponent);
      const componentInstance = fixture.componentInstance;
      componentInstance.iconStatus = 'primary';
      fixture.detectChanges();

      componentInstance.iconStatus = 'alert';
      componentInstance.ngOnChanges();
      fixture.detectChanges();

      const iconContainer = fixture.nativeElement.querySelector('span');
      const containerHasNewIconStatusClass = iconContainer.classList.contains('g-icon--alert');
      expect(containerHasNewIconStatusClass).toBeTruthy();
    });
  });

  describe('when iconClass value changed', () => {

    describe('and new value is empty', () => {
      it('should remove old values from container classes', () => {
        const fixture = TestBed.createComponent(GIconComponent);
        const componentInstance = fixture.componentInstance;
        const iconClasses = ['class-one', 'class-two'];
        componentInstance.iconClass = iconClasses;
        fixture.detectChanges();

        componentInstance.iconClass = [''];
        componentInstance.ngOnChanges();
        fixture.detectChanges();

        const iconContainer = fixture.nativeElement.querySelector('span');
        const containerHasOldIconClasses = iconClasses.some(className => {
          return iconContainer.classList.contains(className);
        });
        expect(containerHasOldIconClasses).toBeFalsy();
      });
    });

    it('should remove missing values from container classes', () => {
      const fixture = TestBed.createComponent(GIconComponent);
      const componentInstance = fixture.componentInstance;
      componentInstance.iconClass = ['class-one', 'class-two'];
      fixture.detectChanges();

      componentInstance.iconClass = ['class-one'];
      componentInstance.ngOnChanges();
      fixture.detectChanges();

      const iconContainer = fixture.nativeElement.querySelector('span');
      const containerHasOldIconStatusClass = iconContainer.classList.contains('class-two');
      expect(containerHasOldIconStatusClass).toBeFalsy();
    });

    it('should add new values to container classes', () => {
      const fixture = TestBed.createComponent(GIconComponent);
      const componentInstance = fixture.componentInstance;
      componentInstance.iconClass = ['class-one'];
      fixture.detectChanges();

      const updatedIconClasses = ['class-one', 'class-two'];
      componentInstance.iconClass = updatedIconClasses;
      componentInstance.ngOnChanges();
      fixture.detectChanges();

      const iconContainer = fixture.nativeElement.querySelector('span');
      const containerHasGivenClasses = updatedIconClasses.every(className => {
        return iconContainer.classList.contains(className);
      });
      expect(containerHasGivenClasses).toBeTruthy();
    });
  });
});
