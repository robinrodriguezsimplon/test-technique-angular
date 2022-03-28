import { Pipe, PipeTransform } from "@angular/core";
import { EnumGender } from "../enum";

@Pipe({
  name: "translate",
})
export class TranslatePipe implements PipeTransform {
  /**
   * Returns the translated string if there is a translation
   * Otherwise returns the same string
   * @param {string} value
   * @returns {string}
   */
  transform(value: string): string {
    switch (value) {
      case EnumGender.MALE:
        return "Homme";
      case EnumGender.FEMALE:
        return "Femme";
      default:
        return value;
    }
  }
}
