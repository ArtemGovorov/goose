import { Injectable } from '@angular/core';

@Injectable()

export class GError {
    log(value: any): void {
        console.log(value);
    }

    error(value: any): void {
        throw new Error(value);
    }
}
