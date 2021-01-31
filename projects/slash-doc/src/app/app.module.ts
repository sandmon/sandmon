import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {DocumentComponent} from 'projects/slash-doc/src/app/document.component';

import {NSFormModule} from 'projects/slash-ui/src/form';
import {NSInputModule} from 'projects/slash-ui/src/input';
import {NSNavModule} from 'projects/slash-ui/src/nav';

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
