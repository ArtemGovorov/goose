import { Component } from '@angular/core';

@Component({
    selector: 'gp-utilityslider-page',
    templateUrl: './utility-slider.component.html'
})
export class UtilitySliderComponent {
    protected _componentTag: string = 'gs-utility';

    sliderParams = [
        {name: 'utilitySliderId', description: 'Use this to connect the slider to the service, trigger and pin.'},
        {name: 'sliderPosition', description: 'Use this to set the position of the slider. Possible values: left (default value), right, up.'},
        {name: 'sliderHasPin', description: 'Use this to automatically add a pin to the slider.'},
        {name: 'sliderGroup', description: 'Use this to set up a sliders group. To avoid sibling sliders to overlap.'},
        {name: 'closeOnOutsideClick', description: 'Use this to set specify if the slider will close on click outside of open slider.'},
        {name: 'sliderSize', description: 'Use this to give the utility slider a size. Possible values: small, medium, large.'},
        {name: 'condensedPadding', description: 'If you are using the condensed primary header, set this to true to allow the upper padding of the slider to adjust correctly. Defaults to false.'},
    ];
    triggerParams = [
        {name: 'utilitySliderId', description: 'Use this to connect the slider to the service, trigger and pin.'},
        {name: 'triggerIcon', description: 'Use this to set the name of the trigger icon.'},
        {name: 'triggerIconSize', description: 'Use this to set icon size.'},
        {name: 'triggerIconStatus', description: 'Use this to set icon status.'},
        {name: 'triggerIconClass', description: 'Use this to set additional classes for the icon.'},
        {name: 'triggerOpenIcon', description: 'Use this to set the icon for open state.'},
        {name: 'triggerCloseIcon', description: 'Use this to set the icon for close state.'}
    ];
    pinParams = [
        {name: 'utilityPinId', description: 'Use this to connect the slider to the service, trigger and pin.'}
    ];
    headerParams = [
        {name: 'utilitySliderId', description: 'Use this to connect the header close button to the slider.'},
        {name: 'closeIcon', description: 'Use this to set the close icon. Defaults to a cross.'}
    ];
    functionParams = [
        {name: 'sidePadding', description: 'Use this to toggle side padding. Defaults to true.'}
    ];
}
