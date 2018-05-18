import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = 'http://localhost:9000/';
    public ApiUrl: string = 'angular/app/pages/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
