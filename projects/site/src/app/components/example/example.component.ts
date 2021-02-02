import {Component, Input, OnInit} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';


@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  @Input() title: string;
  @Input() description: SafeHtml;
  @Input() code: string;
  showCode: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleCode() {
    this.showCode = !this.showCode;
  }
}
