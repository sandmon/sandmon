import {Component, OnInit} from '@angular/core';
import {components} from 'projects/site/src/app/docs/component';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  components = components;

  constructor() {

  }

  ngOnInit(): void {
  }

}
