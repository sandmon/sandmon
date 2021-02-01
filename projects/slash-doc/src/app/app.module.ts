import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {DocumentComponent} from 'projects/slash-doc/src/app/routes/document.component';

import {NSFormModule} from 'projects/slash-ui/src/components/form';
import {NSInputModule} from 'projects/slash-ui/src/components/input';
import {NSNavModule} from 'projects/slash-ui/src/components/nav';
import { ComponentComponent } from 'projects/slash-doc/src/app/routes/component.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    ComponentComponent
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
