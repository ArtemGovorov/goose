import { GCookieService } from './g-cookie.service';
import { TestBed, inject } from '@angular/core/testing';
import { DOCUMENT } from '@angular/platform-browser';


class MockDocument {
  cookie: string;
}

describe('GCookieService service ', () => {
  let service: GCookieService;
  let mockDocument: MockDocument;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ GCookieService, {provide: DOCUMENT, useClass: MockDocument} ]
    });
    TestBed.compileComponents();
  });

  beforeEach(inject([GCookieService, DOCUMENT], (cookieService, document) => {
      service = cookieService;
      mockDocument = document;
  }));

  it('should check the existence of a cookie when called', () => {
    mockDocument.cookie = 'testCookie=testCookie';
    const response = service.check('testCookie');
    expect(response).toBeTruthy();

  });

  it('should get a cookie', () => {
    mockDocument.cookie = 'testCookie=testCookie';
    const result = service.get('testCookie');
    expect(result).toEqual('testCookie');
  });

  it('should get all cookies', () => {
    service.deleteAll();
    mockDocument.cookie = 'testCookie=testCookie; testCookie2=testCookie2';
    const result = service.getAll();
    expect(result).toEqual({ testCookie: 'testCookie', testCookie2: 'testCookie2', });
  });

  it('should set a cookie sucessfully and add it to the document', () => {
    service.deleteAll();
    service.set('newCookie', 'newCookie');
    const result = mockDocument.cookie;
    expect(result).toEqual('newCookie=newCookie;');
  });

  it('should set a cookie sucessfully and add it to the document with an options', () => {
    service.deleteAll();
    service.set('newCookie', 'newCookie', 1, undefined, undefined, true);
    const result = mockDocument.cookie;
    let expected = 'newCookie=newCookie;expires=' + getDate(1) + ';secure;';
    expect(result).toEqual(expected);
  });


  it('should remove a specific cookie when called', () => {
    service.deleteAll();
    mockDocument.cookie = 'testCookie=testCookie; testCookie2=testCookie2';
    expect(mockDocument.cookie).toEqual('testCookie=testCookie; testCookie2=testCookie2');
    service.delete('testCookie2');
    expect(mockDocument.cookie).toEqual('testCookie2=;expires=' + getDate(1, true) + ';');
  });

  it('should deleteAll cookies when called', () => {
    service.deleteAll();
    mockDocument.cookie = 'testCookie=testCookie; testCookie=testCookie2;';
    expect(mockDocument.cookie).toEqual('testCookie=testCookie; testCookie=testCookie2;');
    service.deleteAll();
    expect(mockDocument.cookie).toEqual('testCookie=;expires=' + getDate(1, true) + ';');
  });

  /* Get current date format, accepts argument days to add from current date, set minus to be true to take days away from current date */
  function getDate(days?: number, minus?: boolean) {
    let date: any;

    if (!days) {
      days = 0;
    }

    if (minus) {
      date = new Date(new Date().getTime() - days * 1000 * 60 * 60 * 24);
    } else {
      date = new Date(new Date().getTime() + days * 1000 * 60 * 60 * 24);
    }
    date = date.toUTCString();
    date = date.toString().replace('+0000 (GMT Standard Time)', '');
    return date;
  }

});
