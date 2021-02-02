import { Component, OnInit } from '@angular/core';

import doc from '!raw-loader!projects/slash-ui/src/components/container/readme.md';
import basicDoc from '!raw-loader!projects/slash-ui/src/components/container/demo/basic.md';
import basicCode from '!raw-loader!projects/slash-ui/src/components/grid/demo/basic.component';
import {Examples} from 'projects/slash-doc/src/components/doc/document.component';
import {NSDemoContainerBasicComponent} from 'projects/slash-ui/src/components/container/demo/basic.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  doc = doc;
  examples: Examples = {
    col: 1,
    children: [
      {
        doc: basicDoc,
        code: basicCode,
        component: NSDemoContainerBasicComponent,
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
