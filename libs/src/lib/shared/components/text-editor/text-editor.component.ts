import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { Editor, NgxEditorComponent, Toolbar } from "ngx-editor";
@Component({
  selector: "lib-text-editor",
  templateUrl: "./text-editor.component.html",
  styleUrls: ["./text-editor.component.scss"],
})
export class TextEditorComponent implements OnInit, OnDestroy, AfterViewInit {
  public editor!: Editor;
  public isReadMore = false;
  public isEmpty = false;
  public className = `text-editor`;

  @Input() public document = {};
  @Input() public readonly = false;
  @Input() public showReadMore = true;
  @Output() public editorChanged = new EventEmitter();

  @ViewChild("ngxeditor") public editorComponent!: NgxEditorComponent;

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
        class: this.className,
        contenteditable: `${!this.readonly}`,
      },
    });

    this.editor.valueChanges.subscribe((value) => this.editorChanged.emit(value));

    this.form = new FormGroup({
      editorContent: new FormControl({
        value: this.document,
        disabled: false,
      }),
    });
  }

  ngAfterViewInit() {
    this.editorComponent.setDisabledState(this.readonly);
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }
}
