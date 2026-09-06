import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appFormatScripture]",
  standalone: true,
})
export class FormatScriptureDirective {
  @Input("appFormatScripture") verseText!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (!this.verseText) return;

    const verseMatch = this.verseText.replace(/\([^)]*\)/g, "").trim();

    const bookMatch =
      this.verseText
        .match(/\(([^)]+)\)[^()]*$/)?.[0]
        ?.replace("(", "")
        ?.replace(")", "") ?? "";

    // Regex to parse: Optional Book Number, Book Name, Chapter, and Verse
    // Matches: "1 John 3 16", "John 3:16", "1John 3 16", "Romans 12"
    const regex = /^([1-3]?\s*[A-Za-z]+)\s+(\d+):(\d+)(?:-(\d+))?/;
    const match = bookMatch.match(regex);

    if (!match) {
      return this.renderer.setProperty(this.el.nativeElement, "innerText", this.verseText);
    }

    const [_, bookName, chapter, startVerse, endVerse] = match;
    // const fullBookName = bookNumber ? `${bookNumber} ${bookName}` : bookName;
    const fullVerse = endVerse ? `${startVerse}-${endVerse}` : startVerse;
    // Reconstruct into standard format: "1 John 3:16"
    const bookReference = `${bookName} ${chapter}:${fullVerse}`;

    const linkToBLB = `https://www.blueletterbible.org/nasb95/${bookName}/${chapter}/${fullVerse}`;

    const formattedHtml = `
      <span>${verseMatch}</span>
      <h5 style="margin: 5px 0px">
        <a href="${linkToBLB}" target="_blank">${bookReference}</a>
      </h5>
    `;
    // // Safely inject the new HTML structure into the host element
    this.renderer.setProperty(this.el.nativeElement, "innerHTML", formattedHtml);
  }
}
