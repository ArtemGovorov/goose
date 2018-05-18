import { Component } from '@angular/core';

@Component({
    selector: 'gp-helpers-page',
    templateUrl: './helpers.component.html',
    styles: [`
    `]
})
export class HelpersComponent {
    public exampleCookie = `
        // Import Cookie Service
        import { GCookieService } from '@goose/g-cookie.service';

        // Extend Cookie Service override prefix
        import { Injectable } from '@angular/core';
        @Injectable()
        export class MyCookieService extends GCookieService {
            constructor(){
                this.super();
            }
            init(){
                this.prefix = 'new_one';
            }
        }

        // Provide it in the component constructor
        constructor( private cookieService: GCookieService) { }

        // Set / Store Cookie
        this.cookieService.set(name: string, value: string, expires?: number | Date, path?: string, domain?: string, secure?: boolean);

        // Get / Fetch Cookie
        this.cookieService.get(name: string);
        // Get / Fetch  all Cookie
        this.cookieService.getAll();

        // Check if Cookie exists
        this.cookieService.check(name: string);

        // Delete / Remove Cookie
        this.cookieService.delete(cookieName, ?path, ?domain);

        // Delete / Remove All Cookie
        this.cookieService.delete(?path, ?domain);
    `;
}
