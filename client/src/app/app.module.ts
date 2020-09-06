import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {API_BASE_URL} from './core/services/service-proxies';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: API_BASE_URL,
            useValue: environment.BASE_URL
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
