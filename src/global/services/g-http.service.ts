import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// import { InjectionToken } from '@angular/core';

// 1. Create token
// export const ACTION = new InjectionToken('app.action');



@Injectable()
export class GRestService {
    private headers: Headers;
    constructor(protected http: Http) {
    }

    public getAll<T>(url: string, options?: RequestOptionsArgs): Observable<[T]> {
        options = this.prepareOptions(options);
        return this.http.get(url, options).map(response => response.json());
    }
    public getOne(url: string, id: number, options?: RequestOptionsArgs): Observable<Response> {
        options = this.prepareOptions(options);
        return this.http.get(`${url}${id}`).map(response => response.json());
    }
    public add(url: string, itemName: string, options?: RequestOptionsArgs): Observable<Response> {
        options = this.prepareOptions(options);
        let toAdd = JSON.stringify({ ItemName: itemName });


        return this.http.post(url, toAdd, { headers: this.headers })
            .map(response => response.json())
            .catch(this.handleError);
    }

    public update(url: string, itemToUpdate: any, options?: RequestOptionsArgs, id?: number, ): Observable<Response> {
        options = this.prepareOptions(options);
        return this.http.put(url + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map(response => response.json())
            .catch(this.handleError);
    }

    public delete(url: string, id: number, options?: RequestOptionsArgs): Observable<Response> {
        options = this.prepareOptions(options);
        return this.http.delete(url + id)
            .catch(this.handleError);
    }
    private prepareOptions(options?: RequestOptionsArgs): RequestOptionsArgs {

        options = options || {};

        if (!options.headers) {
            options.headers = new Headers();
        }

        // if (token) {
        //     options.headers.append('Authorization', 'Bearer ' + token);
        // }

        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Accept', 'application/json');

        return options;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
