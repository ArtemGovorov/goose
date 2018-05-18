import { GUtils } from './g-utils';
import { TestBed } from '@angular/core/testing';
import { GError } from './g-error.service';
import { GIconComponent } from '../components/icon/g-icon.component';
import { FormsModule } from '@angular/forms';
import { GClickOutsideDirective } from '../directives/g-click-outside.directive';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('GUtil service ', () => {
  let service: GUtils;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ FormsModule ],
        providers: [GUtils, GError],
        declarations: [GClickOutsideDirective, GIconComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    TestBed.compileComponents();
    service = new GUtils();

  });

  it('should return true when calling with isEmpty with empty values', () => {
    const result1 = service.isEmpty('');
    const result2 = service.isEmpty(null);
    const result3 = service.isEmpty(undefined);
    expect(result1).toBeTruthy();
    expect(result2).toBeTruthy();
    expect(result3).toBeTruthy();
  });

  it('should return false when calling isEmpty with a non empty value', () => {
    const result = service.isEmpty('test');
    expect(result).toBeFalsy();
  });

  it('should return false when calling with isNotEmpty with empty values', () => {
    const result1 = service.isNotEmpty(undefined);
    expect(result1).toBeFalsy();
  });

  it('should return true when calling isNotEmpty with a non empty value', () => {
    const result = service.isNotEmpty('test');
    expect(result).toBeTruthy();
  });


});
