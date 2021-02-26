import { InjectionToken } from "@angular/core";
import { MenuService } from "./menu.service";

export const NsIsMenuInsideDropDownToken = new InjectionToken<boolean>('NsIsInDropDownMenuToken');
export const NsMenuServiceLocalToken = new InjectionToken<MenuService>('NsMenuServiceLocalToken')
