import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { DomSanitizer } from "@angular/platform-browser";
import { Editor, NgxEditorComponent, NgxEditorModule, toHTML, Toolbar } from "ngx-editor";
import { Subscription } from "rxjs";
import { NarratorComponent, NarratorStyle } from "../narrator/narrator.component";
@Component({
  selector: "lib-text-editor",
  templateUrl: "./text-editor.component.html",
  styleUrls: ["./text-editor.component.scss"],
  encapsulation: ViewEncapsulation.None,
  imports: [MatButtonModule, NgxEditorModule, CommonModule, NarratorComponent, ReactiveFormsModule],
})
export class TextEditorComponent implements OnInit, OnDestroy, AfterViewInit {
  private sanitizer = inject(DomSanitizer);

  public narratorStyle = NarratorStyle;
  public editor!: Editor;
  public isReadMore = false;
  public isEmpty = false;

  private subscription!: Subscription;

  @Input() public document = {};
  @Input() public readonly = false;
  @Input() public showReadMore = true;
  @Output() public editorChanged = new EventEmitter();

  @ViewChild("ngxeditor") public editorComponent?: NgxEditorComponent;
  @ViewChild("readonlyHtml", { read: ElementRef }) public readonlyEditor?: ElementRef;

  public toolbar: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"],
  ];

  public form!: FormGroup;

  public get doc(): AbstractControl | null {
    return this.form.get("editorContent");
  }

  ngOnInit(): void {
    this.isEmpty = !!Object.entries(this.document).length;

    this.editor = new Editor({
      attributes: {
        spellcheck: "true",
        style: "user-select: text",
        contenteditable: `${!this.readonly}`,
      },
    });

    this.subscription = this.editor.valueChanges.subscribe((value) => this.editorChanged.emit(value));

    this.form = new FormGroup({
      editorContent: new FormControl({
        value: this.document,
        disabled: false,
      }),
    });
  }

  ngAfterViewInit() {
    this.editorComponent?.setDisabledState(this.readonly);
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
    this.subscription?.unsubscribe();
  }

  getText() {
    return this.readonly
      ? this.readonlyEditor?.nativeElement?.innerText
      : this.editorComponent!.editor?.view?.dom?.innerText;
  }

  getReadonlyHtml() {
    const html = toHTML(this.document);
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }
}
