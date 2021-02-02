import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'ns-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class NSCardComponent implements OnInit {

  @Input() title: TemplateRef<any> | string | null = null;
  @Input() body: TemplateRef<any> | string | null = null;

  constructor() {
  }

  ngOnInit() {
  }

}
