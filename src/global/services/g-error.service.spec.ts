import { GError } from './g-error.service';
import { TestBed } from '@angular/core/testing';



describe('GUtil service ', () => {
  let service: GError;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [GError]
    });
    TestBed.compileComponents();
    service = new GError();

  });

  it('should console log when calling log functon', () => {
    spyOn(console, 'log');
    service.log('test error');
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('test error');
  });

});
