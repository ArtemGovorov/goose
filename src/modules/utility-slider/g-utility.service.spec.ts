import { GUtilityService, IGUtilitySlider } from './g-utility.service';
import { TestBed } from '@angular/core/testing';
import { inject, async } from '@angular/core/testing';

describe('GUtilityService service ', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [GUtilityService] });
    });

    it('can set and get a slider',
        inject([GUtilityService], (service: GUtilityService) => {
            let stubId = 'stub';
            let setSpy = spyOn(service, 'setSlider').and.callThrough();
            spyOn(service, 'setData');
            service.setSlider(stubId);

            expect(setSpy.calls.count()).toEqual(1);
            expect(service.setData).toHaveBeenCalled();
            let slider: IGUtilitySlider = service.getSlider(stubId);
            expect(slider).toBeDefined();
        })
    );

    it('can set a spesific slider in open state',
        inject([GUtilityService], (service: GUtilityService) => {
            let stubId = 'stub';
            spyOn(service, 'setData');
            service.setSlider(stubId, 'right', true);

            expect(service.getSlider(stubId)).toBeDefined();
            expect(service.isSliderOpen(stubId)).toBeTruthy();
        })
    );

    it('can set multiple sliders',
        inject([GUtilityService], (service: GUtilityService) => {
            let stubs = ['stub1', 'stub2'];
            spyOn(service, 'setData');
            service.setSlider(stubs[0], 'right');
            service.setSlider(stubs[1], 'left');

            expect(service.getSlider(stubs[0]).side).toBe('right');
            expect(service.getSlider(stubs[1]).side).toBe('left');
            expect(service.setData).toHaveBeenCalledTimes(2);
        })
    );

    it('can close a spesific slider',
        inject([GUtilityService], (service: GUtilityService) => {
            let stubs = ['stub1', 'stub2'];
            spyOn(service, 'setData');
            service.setSlider(stubs[0], 'right', true);
            service.setSlider(stubs[1], 'right', true);
            service.closeSlider(stubs[0]);

            expect(service.isSliderOpen(stubs[1])).toBeTruthy();
            expect(service.isSliderOpen(stubs[0])).toBeFalsy();
            expect(service.setData).toHaveBeenCalledTimes(3);
        })
    );

    it('can open a spesific slider',
        inject([GUtilityService], (service: GUtilityService) => {
            let stubs = ['stub1', 'stub2'];
            spyOn(service, 'setData');
            service.setSlider(stubs[0]);
            service.setSlider(stubs[1]);
            service.openSlider(stubs[0]);

            expect(service.isSliderOpen(stubs[0])).toBeTruthy();
            expect(service.isSliderOpen(stubs[1])).toBeFalsy();
            expect(service.setData).toHaveBeenCalledTimes(3);
        })
    );

    it('can send data to subscriber',
        async(inject([GUtilityService], (service: GUtilityService) => {
            let stubs = ['stub1', 'stub2'];
            service.setSlider(stubs[0], 'right', true);

            service.dataChange.filter(slider => slider.id === stubs[1])
                              .subscribe( slider => {
                                    expect(slider.status).toBe(0);
                              });
            service.closeSlider(stubs[0]);
        }))
    );

    it('can send the correct slider data to subscriber',
        async(inject([GUtilityService], (service: GUtilityService) => {
            let stubs = ['stub1', 'stub2'];
            let call = 0;
            service.setSlider(stubs[0], 'right', true);
            service.setSlider(stubs[1]);

            service.dataChange.filter(slider => slider.id === stubs[1])
                              .subscribe( slider => {
                                  call++;
                                  expect(slider.id).toBe(stubs[1]);
                                  if (call === 1) {
                                    expect(slider.status).toBe(0);
                                  }
                                  if (call === 2) {
                                    expect(slider.status).toBe(1);
                                  }
                                  if (call === 3) {
                                    expect(slider.status).toBe(0);
                                  }
                              });
            service.closeSlider(stubs[0]);
            service.openSlider(stubs[1]);
            service.closeSlider(stubs[1]);
        }))
    );

    it('keeps only one slider open in a group of sliders',
        inject([GUtilityService], (service: GUtilityService) => {
            let stubs = ['stub1', 'stub2', 'stub3'];
            spyOn(service, 'setData');
            service.setSlider(stubs[0], 'right', false, 'group');
            service.setSlider(stubs[1], 'right', false, 'group');
            service.setSlider(stubs[2], 'right', false, 'group');
            service.openSlider(stubs[0]);
            service.openSlider(stubs[1]);

            expect(service.isSliderOpen(stubs[0])).toBeFalsy();
            expect(service.isSliderOpen(stubs[1])).toBeTruthy();
            expect(service.isSliderOpen(stubs[2])).toBeFalsy();

            service.openSlider(stubs[2]);
            expect(service.isSliderOpen(stubs[0])).toBeFalsy();
            expect(service.isSliderOpen(stubs[1])).toBeFalsy();
            expect(service.isSliderOpen(stubs[2])).toBeTruthy();
        })
    );
});
