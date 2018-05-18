import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import { HighlightComponent } from './code-highlight/highlight.component';
import { GooseModule } from '../../src/goose.module';
import { ExampleComponent } from './example/example.component';
import { ExampleParametersComponent } from './example/example-parameters.component';

@NgModule({
  imports: [
    CommonModule,
    GooseModule,
    HighlightJsModule,

  ],
  declarations: [
    HighlightComponent,
    ExampleComponent,
    ExampleParametersComponent],
  exports: [
    HighlightComponent,
    ExampleComponent,
    ExampleParametersComponent,
    CommonModule,
    FormsModule,
    GooseModule,
  ],
  providers: [HighlightJsService]
})
export class SharedModule { }
