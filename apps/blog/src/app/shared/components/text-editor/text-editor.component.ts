import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import * as $ from "jquery";
import { Editor, Toolbar } from "ngx-editor";
@Component({
  selector: "blog-text-editor",
  templateUrl: "./text-editor.component.html",
  styleUrls: ["./text-editor.component.scss"],
})
export class TextEditorComponent implements OnInit, OnDestroy, OnChanges {
  public editor!: Editor;
  public isReadMore = false;
  public isEmpty = false;
  public className = `text-editor`;

  @Input() public document = {};
  @Input() public readonly = false;
  @Input() public showReadMore = true;
  @Output() public editorChanged = new EventEmitter();

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

  constructor() {}

  ngOnInit(): void {
    this.isEmpty = !!Object.entries(this.document).length;

    this.editor = new Editor({
      attributes: {
        spellcheck: "true",
        class: this.className,
      },
    });

    if (this.readonly) {
      $(`.${this.className}`).attr("contenteditable", "false");
    }

    this.editor.valueChanges.subscribe((value) =>
      this.editorChanged.emit(value)
    );

    this.form = new FormGroup({
      editorContent: new FormControl({
        value: this.document,
        disabled: false,
      }),
    });
  }

  ngOnChanges() {
    if (this.readonly) {
      $(`.${this.className}`).attr("contenteditable", "false");
    }
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }
}
