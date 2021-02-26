import { Direction, Directionality } from "@angular/cdk/bidi";
import { Directive, Inject, Input, Optional } from "@angular/core";
import { InputBoolean } from "../../utils/convert";
import { MenuService } from "./menu.service";
import { NsIsMenuInsideDropDownToken } from "./menu.token";

@Directive({
  selector: '[ns-menu-item]',
  exportAs: 'nsMenuItem',
  host: {
    '[class.menu-item]': `!isMenuInsideDropDown`,
    '[class.menu-item-selected]': `!isMenuInsideDropDown && nsSelected`,
    '[class.menu-item-danger]': `!isMenuInsideDropDown && nsDanger`,
    '[class.menu-item-disabled]': `!isMenuInsideDropDown && nsDisabled`,
    '[style.paddingLeft.px]': `dir === "rtl" ? null : nsPaddingLeft || inlinePaddingLeft`,
    '[style.paddingRight.px]': `dir === "rtl" ? nsPaddingLeft || inlinePaddingLeft : null`,
    '(click)': `clickMenuItem($event)`
  }
})
export class NSMenuItemDirective {

  @Input() @InputBoolean() nsSelected: boolean = false;
  @Input() @InputBoolean() nsDanger: boolean = false;
  @Input() @InputBoolean() nsDisabled: boolean = false;
  @Input() nsPaddingLeft?: number;

  dir:Direction = 'ltr';

  constructor(
    private nsMenuService: MenuService,
    @Inject(NsIsMenuInsideDropDownToken) public isMenuInsideDropDown:boolean,
    @Optional() directionality: Directionality,
  ) {

  }

  clickMenuItem(e: MouseEvent): void {
    if (this.nsDisabled) {
      e.preventDefault()
      e.stopPropagation()
    } else {
      this.nsMenuService.onDescendantMenuItemClick(this)
    }
  }
}