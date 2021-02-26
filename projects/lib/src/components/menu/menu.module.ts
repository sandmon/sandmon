import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NSMenuDirective } from "./menu.directive";
import { NSMenuItemDirective } from "./menu-item.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [NSMenuDirective, NSMenuItemDirective],
  exports: [NSMenuDirective, NSMenuItemDirective]
})

export class NSMenuModule {}