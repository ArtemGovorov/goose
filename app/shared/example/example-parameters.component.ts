import { Component, Input } from '@angular/core';

import { InputParameterUsage } from './input-parameter-usage';

@Component({
  selector: 'gp-example-parameters',
  templateUrl: './example-parameters.component.html'
})
export class ExampleParametersComponent {
    @Input() tag: string;
    @Input() params: InputParameterUsage[];
    @Input() title: string;
    @Input() subtitle: string;
}
