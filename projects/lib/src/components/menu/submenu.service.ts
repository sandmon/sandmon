import { Injectable, OnDestroy, Optional, SkipSelf } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MenuService } from "./menu.service";
import { NsMenuModeType } from "./menu.types";

@Injectable()
export class SubmenuService implements OnDestroy {
  mode$: Observable<NsMenuModeType> = this.nsMenuService.mode$.pipe(
    map(mode => {
      if (mode === 'inline') {
        return 'inline'
      } else if (mode === 'vertical' || this.nsHostSubmenuService) {
        return 'vertical'
      } else {
        return 'horizontal'
      }
    })
  );
  level: number = 1;

  constructor(
    @SkipSelf() @Optional() private nsHostSubmenuService: SubmenuService,
    public nsMenuService: MenuService
  ) {
    if (this.nsHostSubmenuService) {
      this.level = this.nsHostSubmenuService.level + 1
    }
  }
  ngOnDestroy(): void {

  }
}