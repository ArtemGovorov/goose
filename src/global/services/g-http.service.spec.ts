import { TestBed, inject } from '@angular/core/testing';
import { 
  HttpModule, 
  XHRBackend,
  Response,
  ResponseOptions  
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { GRestService } from './g-http.service';


describe('GRestService', () => {
  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        GRestService, 
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })

  });

  describe('getAll()', () => {
    it('should return an Observable<Array<Video>>',
        inject([GRestService, XHRBackend], (myService, mockBackend) => {

        const mockResponse = {
          data: [
            { id: 0, name: 'Result 0' },
            { id: 1, name: 'Result 1' },
            { id: 2, name: 'Result 2' },
            { id: 3, name: 'Result 3' },
          ]
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        myService.getAll().subscribe((videos) => {
          expect(videos.data.length).toBe(4);
          expect(videos.data[0].name).toEqual('Result 0');
          expect(videos.data[1].name).toEqual('Result 1');
          expect(videos.data[2].name).toEqual('Result 2');
          expect(videos.data[3].name).toEqual('Result 3');
        });

    }));
  });

  describe('getOne()', () => {
    it('should return an Observable<Response>',
      inject([GRestService, XHRBackend], (myService, mockBackend) => {

        const mockResponse = {
          data: [
            { id: 1, name: 'Result 1' },
          ]
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        myService.getOne(undefined, 1).subscribe((videos) => {
          expect(videos.data.length).toBe(1);
          expect(videos.data[0].name).toEqual('Result 1');
        });


    }));
  });

  describe('add()', () => {
    it('should return an Observable<Response>',
      inject([GRestService, XHRBackend], (myService, mockBackend) => {

        const mockResponse = {
          message: 'Entry added'
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        myService.add().subscribe((response) => {
          expect(response).toEqual(mockResponse);
        });


    }));
    
  });

  describe('update()', () => {
    it('should return an Observable<Response>',
      inject([GRestService, XHRBackend], (myService, mockBackend) => {

        const mockResponse = {
          message: 'Entry updated'
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        myService.update().subscribe((response) => {
          expect(response).toEqual(mockResponse);
        });


    }));
    
  });

  describe('delete()', () => {
    it('should return an Observable<Response>',
      inject([GRestService, XHRBackend], (myService, mockBackend) => {

        const mockResponse = {message: 'Deleted entry'};

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: mockResponse
          })));
        });

        myService.delete().subscribe((response) => {
          expect(response._body).toEqual(mockResponse);
        });


    }));
    
  });
  
});
