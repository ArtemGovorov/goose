import { DebugElement } from '@angular/core';
import { GClickOutsideDirective } from './g-click-outside.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { GError } from '../../global/services/g-error.service';



describe('GClickOutsideDirective directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GError],
      declarations: [
        GClickOutsideDirective,
        TestComponent
      ]
    });
    fixture = TestBed.createComponent(TestComponent);
    debugElement = fixture.debugElement;
    element = debugElement.nativeElement;
    fixture.detectChanges();
    TestBed.compileComponents();
  });


  it('should call testFunc when clicking outside the directive ', () => {
    spyOn(fixture.componentInstance, 'testFunction').and.callThrough();
    const el = fixture.nativeElement.querySelector('.outside');
    el.click();
    expect(fixture.componentInstance.testFunction).toHaveBeenCalled();
  });

  it('shouldnt call testFunc when clicking inside the directive ', () => {
    spyOn(fixture.componentInstance, 'testFunction').and.callThrough();
    const el = fixture.nativeElement.querySelector('.inside');
    el.click();
    expect(fixture.componentInstance.testFunction).not.toHaveBeenCalled();
  });

  it('should call testFunc when hitting composedPath if path does not exist', () => {
    spyOn(fixture.componentInstance, 'testFunction').and.callThrough();
    const fakeEvent: any = {
      altKey: false,
      button: 0,
      buttons: 0,
      clientX: 0,
      clientY: 0,
      ctrlKey: false,
      fromElement: null,
      layerX: 0,
      layerY: 0,
      metaKey: false,
      movementX: 0,
      movementY: 0,
      offsetX: 0,
      offsetY: 0,
      pageX: 0,
      pageY: 0,
      relatedTarget: null,
      screenX: 0,
      screenY: 0,
      shiftKey: false,
      toElement: null,
      which: 0,
      x: 0,
      y: 0,
      target: {
        parentElement: null
      }
    };
    const target = fixture.nativeElement.querySelector('.outside') as HTMLElement;
    fixture.componentInstance.child.onClick(fakeEvent, target);
    expect(fixture.componentInstance.testFunction).toHaveBeenCalled();
  });


  it('should call testFunc when TouchEnd on outside the directive ', () => {
    spyOn(fixture.componentInstance, 'testFunction').and.callThrough();
    const target = fixture.nativeElement.querySelector('.outside');
    const fakeEvent: any = {
      altKey: false,
      button: 0,
      buttons: 0,
      clientX: 0,
      clientY: 0,
      ctrlKey: false,
      fromElement: null,
      layerX: 0,
      layerY: 0,
      metaKey: false,
      movementX: 0,
      movementY: 0,
      offsetX: 0,
      offsetY: 0,
      pageX: 0,
      pageY: 0,
      relatedTarget: null,
      screenX: 0,
      screenY: 0,
      shiftKey: false,
      toElement: null,
      which: 0,
      x: 0,
      y: 0,
      target: {
        parentElement: null
      }
    };
    fixture.componentInstance.child.onTouchEnd(fakeEvent, target);
    fixture.detectChanges();
    expect(fixture.componentInstance.testFunction).toHaveBeenCalled();
  });
});


import { Component, ViewChild } from '@angular/core';

@Component({
    template: `
    <div class="outside">

      <div class="inside" (gsClickOutside)="testFunction()">


      </div>

    </div>
    `
  })


export class TestComponent {

   @ViewChild(GClickOutsideDirective) child: GClickOutsideDirective;

    public testFunction() {
      return true;
    }
}
