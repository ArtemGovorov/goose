import { Input } from '@angular/core';
import { GError } from './global/services/g-error.service';

export abstract class BaseComponent {
    @Input() id: string = '';
    @Input() ngclass: string = '';
    @Input() name: string = '';
    @Input() label: string = '';
    @Input() hover = false;
    @Input() disabled = false;
    @Input() focus = false;

    public gClasses: any = {};
    public cssClasses: any = {};

    constructor(protected _errorService: GError) { }
}
