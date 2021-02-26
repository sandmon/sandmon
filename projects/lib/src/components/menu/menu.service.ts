import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { NsMenuModeType, NsMenuThemeType } from "./menu.types";

@Injectable()
export class MenuService {
  // 所有后代子孙菜单点击事件
  descendantMenuItemClick$ = new Subject<any>();
  childMenuItemClick$ = new Subject<any>();
  theme$ = new BehaviorSubject<NsMenuThemeType>('light');
  mode$ = new BehaviorSubject<NsMenuModeType>('vertical');
  inlineIndent$ = new BehaviorSubject<number>(24);
  isChildSubMenuOpen$ = new BehaviorSubject<boolean>(false);

  onDescendantMenuItemClick(menu:any): void {
    this.descendantMenuItemClick$.next(menu)
  }

  onChildMenuItemClick(menu:any): void {
    this.childMenuItemClick$.next(menu)
  }

  setTheme(theme:NsMenuThemeType): void {
    this.theme$.next(theme)
  }

  setMode(mode:NsMenuModeType): void {
    this.mode$.next(mode)
  }

  setInlineIndent(indent:number): void {
    this.inlineIndent$.next(indent)
  }
}