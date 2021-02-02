import {Component, Input, OnInit} from '@angular/core';
import {INPUT_TYPE, MEDIA_SIZE} from 'projects/slash-ui/src/types';


@Component({
  selector: 'ns-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class NSInputComponent implements OnInit {

  @Input() nsSize: MEDIA_SIZE = 'default';
  @Input() nsType: INPUT_TYPE = 'text';
  @Input() nsPlaceholder: string | null = null;
  @Input() nsDisabled: boolean = false;
  @Input() nsReadonly: boolean = false;
  @Input() nsDataList: string[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
