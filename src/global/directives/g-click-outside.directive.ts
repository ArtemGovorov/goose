import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
    selector: '[gsClickOutside]'
})
export class GClickOutsideDirective {
    @Output()
    public gsClickOutside = new EventEmitter<MouseEvent | any>();

    constructor(private _elementRef: ElementRef) {
    }

    @HostListener('document:click', ['$event', '$event.target'])
    public onClick(event: MouseEvent, targetElement: HTMLElement): void {
        this.handleClick(event, targetElement);
    }

    @HostListener('document:touchend', ['$event', '$event.target'])
    public onTouchEnd(event: any, targetElement: HTMLElement): void {
        this.handleClick(event, targetElement);
    }

    private handleClick(event: MouseEvent | any, targetElement: HTMLElement) {
        if (!targetElement) {
            return;
        }
        // check if the target element is in the path of parent
        if (this._elementRef.nativeElement.contains(targetElement)) {
            return;
        }
        // event.path is only supported in chrome
        // event.composedPath() is not supported in chrome or ie, but supported in others
        let isInPath = false;
        if (event.path) {
            isInPath = event.path.indexOf(this._elementRef.nativeElement) > 0;
        } else if (event.composedPath) {
            isInPath = event.composedPath().indexOf(this._elementRef.nativeElement) > 0;
        } else {
            if (this._elementRef.nativeElement === null || this._elementRef.nativeElement.parentElement === null) {
                isInPath = false;
            } else {
                let element = event.target;
                while (element.parentElement != null && !isInPath) {
                    element = element.parentElement;
                    if (element === this._elementRef.nativeElement) {
                        isInPath = true;
                    }
                }
            }
        }

        if (!isInPath) {
            this.gsClickOutside.emit(event);
        }
    }
}
