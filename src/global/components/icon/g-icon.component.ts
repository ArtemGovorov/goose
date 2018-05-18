import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { GUtils } from '../../../global/services/g-utils';
import { GError } from '../../../global/services/g-error.service';
import { BaseComponent } from '../../../base.component';

const defaultIconClasses = {'g-icon': true};

@Component({
  selector: 'gs-icon',
  templateUrl: './g-icon.component.html'
})
export class GIconComponent extends BaseComponent implements OnInit, OnChanges {

  @Input() iconName: string;
  @Input() iconSize: string;
  @Input() iconStatus: 'primary' | 'alert';
  @Input() iconClass: string | string[] | { [key: string]: boolean };

  constructor(protected _utils: GUtils, protected _errorService: GError) {
    super(_errorService);
  }

  ngOnInit() {
    this.setCurrentClasses();
  }

  ngOnChanges() {
    this.setCurrentClasses();
  }

  private setCurrentClasses() {

    this.gClasses = Object.assign({}, defaultIconClasses);

    this.gClasses['g-icon-' + this.iconName] = true;
    if (this.iconSize) {
      this.gClasses['g-icon--' + this.iconSize] = true;
    }
    if (this.iconStatus) {
      this.gClasses['g-icon--' + this.iconStatus] = true;
    }
    this._utils.tagClass(this.iconClass, this.gClasses);
  }
}
