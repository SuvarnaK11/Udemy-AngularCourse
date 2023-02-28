import { Component } from "@angular/core";

@Component({
    selector : 'app-success-alert',
    template: `
    <div>
        <h4>This is Success Alert Component</h4>
    </div>`,
    styles:[`
    h4{
        color : green;
    }`]
})

export class SuccessAlertComponent{

}