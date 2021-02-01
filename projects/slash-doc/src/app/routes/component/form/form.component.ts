import {Component, OnInit} from '@angular/core';
// @ts-ignore
import formDoc from '!raw-loader!projects/slash-ui/docs/form.md';
// @ts-ignore
import data2 from '!raw-loader!projects/slash-ui/src/components/input/demo/basic/basic.component';
import * as marked from 'marked';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {DocumentParserService} from 'projects/slash-doc/src/service/document-parser.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  constructor(
    private sanitizer: DomSanitizer,
    private dps: DocumentParserService,
  ) {

    // this.docMain = this.sanitizer.bypassSecurityTrustHtml(marked(formDoc));
    //
    // let tokens = marked.lexer(formDoc);
    // console.log('tokens', tokens);
    //
    // const html = marked.parser(tokens);
    // console.log('html', html);
  }

  ngOnInit(): void {
  }

}
