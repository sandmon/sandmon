import {coerceCssPixelValue} from "@angular/cdk/coercion";

export function toCssPixel(value: string | number): string {
  return coerceCssPixelValue(value)
}
