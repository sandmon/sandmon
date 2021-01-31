import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NSInputModule} from 'slash-ui';
import {NSFormModule} from 'slash-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NSFormModule,
    NSInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
