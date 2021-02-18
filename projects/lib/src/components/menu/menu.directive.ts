import { Directive, Input } from "@angular/core";

@Directive({
  selector: '[ns-menu]',
  exportAs: 'nsMenu'
})

export class NSMenuDirective {
  @Input() nsTheme: 'light' | 'dark' = 'light';
  @Input() nsMode: 'horizontal' | 'vertical' = 'vertical';
}