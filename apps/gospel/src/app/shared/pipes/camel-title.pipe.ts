import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "camelToTitle",
})
export class CamelToTitlePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return "";
    }

    return value
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (match) => match.toUpperCase())
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }
}
