import { Directive, Inject, Input, Optional, SkipSelf } from "@angular/core";
import { InputBoolean } from "../../utils/convert";
import { MenuService } from "./menu.service";
import { NsIsMenuInsideDropDownToken, NsMenuServiceLocalToken } from "./menu.token";
import { NsMenuModeType, NsMenuThemeType } from "./menu.types";

export function MenuServiceFactory(serviceInsideDropDown: MenuService, serviceOutsideDropDown): MenuService {
  return serviceInsideDropDown ? serviceInsideDropDown : serviceOutsideDropDown;
}

export function MenuDropDownTokenFactory (isMenuInsideDropDown: boolean): boolean {
  return isMenuInsideDropDown ? isMenuInsideDropDown : false;
}

@Directive({
  selector: '[ns-menu]',
  exportAs: 'nsMenu',
  providers: [
    {
      provide: NsMenuServiceLocalToken,
      useClass: MenuService,
    },
    {
      provide: MenuService,
      useFactory: MenuServiceFactory,
      deps: [[new SkipSelf(), new Optional(), MenuService], NsMenuServiceLocalToken]
    },
    {
      provide: NsIsMenuInsideDropDownToken,
      useFactory: MenuDropDownTokenFactory,
      deps: [[new SkipSelf(), new Optional(), NsIsMenuInsideDropDownToken]]
    }
  ],
  host: {
    '[class.menu]': '!isMenuInsideDropDown',
    '[class.menu-root]': '!isMenuInsideDropDown',
    '[class.menu-light]': '!isMenuInsideDropDown && nsTheme === "light"',
    '[class.menu-dark]': '!isMenuInsideDropDown && nsTheme === "dark"',
    '[class.menu-vertical]': '!isMenuInsideDropDown && nsMode === "vertical"',
    '[class.menu-horizontal]': '!isMenuInsideDropDown && nsMode === "horizontal"',
    '[class.menu-inline]': '!isMenuInsideDropDown && nsMode === "inline"',
    '[class.ant-menu-inline-collapsed]': `!isMenuInsideDropDown && nsInlineCollapsed`,
  }
})
export class NSMenuDirective {

  @Input() nsInlineIndent: number = 24;
  @Input() nsTheme: NsMenuThemeType = 'light';
  @Input() nsMode: NsMenuModeType = 'vertical';
  @Input() @InputBoolean() nsInlineCollapsed: boolean = false;
  @Input() @InputBoolean() nsSelectable: boolean = true;
  
  actualMode: NsMenuModeType = 'vertical';

  constructor(
    private nsMenuService: MenuService,
    @Inject(NsIsMenuInsideDropDownToken) public isMenuInsideDropDown: boolean,
  ) {
    console.log(this.isMenuInsideDropDown)
  }
}