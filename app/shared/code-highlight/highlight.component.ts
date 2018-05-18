import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js/lib/highlight-js.module';

@Component({
  selector: 'gp-code-highlight',
  templateUrl: './highlight.component.html'
})

export class HighlightComponent implements AfterViewInit {
  @ViewChild('gpHighlight') codeblock: ElementRef;
  @Input() isOpen: boolean = false;
  @Input() language: string;

  constructor(protected service: HighlightJsService) { }

  toggleOpen(event: Event): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }

  ngAfterViewInit(): void {
    this.service.highlight(this.codeblock.nativeElement);
  }
}
