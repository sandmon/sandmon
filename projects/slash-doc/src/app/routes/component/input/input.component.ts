import {Component, OnInit} from '@angular/core';

import doc from '!raw-loader!projects/slash-ui/src/components/input/readme.md';
import basicDoc from '!raw-loader!projects/slash-ui/src/components/input/demo/basic/basic.md';
import basicCode from '!raw-loader!projects/slash-ui/src/components/input/demo/basic/basic.component';
import {NsDemoBasicInputComponent} from 'projects/slash-ui/src/components/input/demo/basic/basic.component';
import {Examples} from 'projects/slash-doc/src/components/doc/document.component';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  doc = doc;
  examples: Examples = {
    col: 2,
    children: [
      {
        doc: basicDoc,
        code: basicCode,
        component: NsDemoBasicInputComponent,
      },
      {
        doc: basicDoc,
        code: basicCode,
        component: NsDemoBasicInputComponent,
      },
      {
        doc: basicDoc,
        code: basicCode,
        component: NsDemoBasicInputComponent,
      },
      {
        doc: basicDoc,
        code: basicCode,
        component: NsDemoBasicInputComponent,
      },
    ]
  };

  constructor() {

  }

  ngOnInit(): void {
  }

}
