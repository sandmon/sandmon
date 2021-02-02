import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-basic',
  template: `
    <ns-container>
      <div ns-row>
        <div class="c1" ns-col [nsSpan]="6">
          1
        </div>
        <div class="c2" ns-col [nsSpan]="6">
          2
        </div>
      </div>
    </ns-container>
  `,
  styles: [`
    .c1 {
      background: red;
    }
    .c2 {
      background: gray;
    }
  `]
})
export class NSDemoGridBasicComponent implements OnInit {

  constructor(
    private cd: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
  }

}
