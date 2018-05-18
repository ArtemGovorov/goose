import { Injectable } from '@angular/core';

@Injectable()

export class GUtils {
    isEmpty(value: any): boolean {
        return (value === null) || (value === undefined) || (value === '');
    }

    isNotEmpty(value: any): boolean {
         return !this.isEmpty(value);
    }

    isNotEmptyString(value: any): boolean {
         return (value !== '');
    }

    hasClass(element: any, className: string): boolean {
        return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
    }

    tagClass(inputVal: any, tagClasses: object): object {
        if (typeof inputVal === 'string') {
            inputVal = inputVal.split(/\s+/);
        }
        if (inputVal instanceof Array) {
            inputVal.forEach(extraClass => tagClasses[extraClass] = true);
        }
        if (inputVal instanceof Object && !(inputVal instanceof Array)) {
            Object.assign(tagClasses, inputVal);
        }
        return tagClasses;
    }

    getRandomId(prefix: string): string {
        return prefix + String(Math.floor((Math.random() * (999999 - 100000 + 1) + 100000)));
    }

    findSingle(element: HTMLElement, selector: string): any {
        return element.querySelector(selector);
    }

    scrollInView(container: any, item: any) {
        let borderTopValue: string = getComputedStyle(container).getPropertyValue('borderTopWidth');
        let borderTop: number = borderTopValue ? parseFloat(borderTopValue) : 0;
        let paddingTopValue: string = getComputedStyle(container).getPropertyValue('paddingTop');
        let paddingTop: number = paddingTopValue ? parseFloat(paddingTopValue) : 0;
        let containerRect = container.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();
        let offset = (itemRect.top + document.body.scrollTop) - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
        let scroll = container.scrollTop;
        let elementHeight = container.clientHeight;
        let itemHeight = this.getOuterHeight(item);

        if (offset < 0) {
            container.scrollTop = scroll + offset;
        } else if ((offset + itemHeight) > elementHeight) {
            container.scrollTop = scroll + offset - elementHeight + itemHeight;
        }
    }

    getOuterHeight(element: any, margin?: any) {
        let height = element.offsetHeight;

        if (margin) {
            let style = getComputedStyle(element);
            height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }

        return height;
    }
}
