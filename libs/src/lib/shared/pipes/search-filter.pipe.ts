import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "searchFilter",
})
export class SearchFilterPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(items: any[], searchText: string, propertiesToSearch?: string[]): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      // If specific properties are provided, search only within those
      if (propertiesToSearch && propertiesToSearch.length > 0) {
        return propertiesToSearch.some((prop) => {
          const isFound = item[prop] && item[prop].toString().toLowerCase().includes(searchText);
          if (isFound && (prop === "json" || prop === "html")) {
            this.highlightText(searchText, item[prop]);
          }

          return isFound;
        });
      } else {
        // Otherwise, search all string properties of the object
        return Object.values(item).some(
          (value) => typeof value === "string" && value.toLowerCase().includes(searchText)
        );
      }
    });
  }

  private highlightText(searchTerm: string, html: string) {
    const regex = new RegExp(searchTerm, "gi"); // 'gi' for global and case-insensitive
    const highlightedText = html.replace(regex, (match) => `<span class="primary">${match}</span>`);
    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }
}
