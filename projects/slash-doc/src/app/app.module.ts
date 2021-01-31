import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {DocumentComponent} from 'projects/slash-doc/src/app/document.component';

import {NSInputModule} from 'slash-ui';
import {NSFormModule} from 'slash-ui';
import {NSNavModule} from 'slash-ui';

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NSFormModule,
    NSInputModule,
    NSNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
