import { Component, Input } from '@angular/core';

@Component({
  selector: 'gp-example-code',
  templateUrl: './example.component.html'
})

export class ExampleComponent {
  @Input('class') klass: string;
}
