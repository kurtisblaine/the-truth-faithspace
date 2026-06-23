import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "highlight",
  standalone: true, // Use true if you are using modern standalone components
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, search: string): string {
    if (!search || !value) {
      return value;
    }

    // Escape special regex characters to prevent syntax crashes
    const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    // 'gi' enables global matching and case insensitivity
    const regex = new RegExp(escapedSearch, "gi");

    // Wrap matching text inside standard HTML <mark> tags
    return value.replace(regex, (match) => `<mark>${match}</mark>`);
  }
}
