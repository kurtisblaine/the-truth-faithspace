import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { Editor, Toolbar, Validators } from "ngx-editor";
import { PsalmEntity } from "../../../state/psalm/psalm.models";
@Component({
  selector: "blog-text-editor",
  templateUrl: "./text-editor.component.html",
  styleUrls: ["./text-editor.component.scss"],
})
export class TextEditorComponent implements OnInit, OnDestroy {
  public editor!: Editor;

  @Input() public document: PsalmEntity = { id: 0, json: null };
  @Input() public readonly = false;

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
    this.editor = new Editor();

    this.editor.valueChanges.subscribe((value) =>
      this.editorChanged.emit(value)
    );

    this.form = new FormGroup({
      editorContent: new FormControl(
        { value: this.document.json, disabled: this.readonly }
        // Validators.required()
      ),
    });
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
