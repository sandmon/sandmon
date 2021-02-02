import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {MEDIA_SIZE} from 'projects/slash-ui/src/types';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'ns-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  @Input() nsSize: MEDIA_SIZE | null = null;

  constructor() {

  }

  ngOnInit() {

  }

}
