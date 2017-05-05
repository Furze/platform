import {NgModule, Sanitizer} from "@angular/core";
import {Title} from "@angular/platform-browser";

import {AlertService} from "ng-jhipster";

import {WindowRef} from "./tracker/window.service";

import {JhiAlertComponent, JhiAlertErrorComponent, ReferableSharedLibsModule} from "./";


export function alertServiceProvider(sanitizer: Sanitizer) {
    // set below to true to make alerts look like toast
    let isToast = false;
    return new AlertService(sanitizer, isToast);
}

@NgModule({
    imports: [
        ReferableSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        WindowRef,
        {
            provide: AlertService,
            useFactory: alertServiceProvider,
            deps: [Sanitizer]
        },
        Title
    ],
    exports: [
        ReferableSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class ReferableSharedCommonModule {
}
