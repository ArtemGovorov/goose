import { MenuNavComponent } from './menu-nav.component';
import { TestBed, async } from '@angular/core/testing';
import { FrameModule } from '../frame.module';
import { AppRoutingModule } from '../../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { GError } from '../../../src/global/services/g-error.service';

describe('MenuNavComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FrameModule,
        AppRoutingModule
        ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, GError]

    });
    TestBed.compileComponents();
  }));

  it('should render...', () => {
    const fixture = TestBed.createComponent(MenuNavComponent);
    fixture.detectChanges();
  });
});
