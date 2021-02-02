import {Component, OnInit} from '@angular/core';

import doc from '!raw-loader!projects/lib/src/components/input/readme.md';
import basicDoc from '!raw-loader!projects/lib/src/components/input/demo/basic.md';
import basicCode from '!raw-loader!projects/lib/src/components/input/demo/basic.component';
import {NsDemoInputBasicComponent} from 'projects/lib/src/components/input/demo/basic.component';
import {Examples} from 'projects/site/src/app/components/document/document.component';


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
        component: NsDemoInputBasicComponent,
      },
      {
        doc: basicDoc,
        code: basicCode,
        component: NsDemoInputBasicComponent,
      },
      {
        doc: basicDoc,
        code: basicCode,
        component: NsDemoInputBasicComponent,
      },
      {
        doc: basicDoc,
        code: basicCode,
        component: NsDemoInputBasicComponent,
      },
    ]
  };

  constructor() {

  }

  ngOnInit(): void {
  }

}
