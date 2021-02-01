import {Component, OnInit} from '@angular/core';
import data from '!raw-loader!projects/slash-ui/docs/form.md';
import data2 from '!raw-loader!projects/slash-ui/src/components/input/demo/basic/basic.component';
import * as marked from 'marked';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  doc: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer,
  ) {
    console.log(data);
    console.log(data2);
    console.log();
    this.doc = this.sanitizer.bypassSecurityTrustHtml(marked(data));
  }

  ngOnInit(): void {
  }

}
