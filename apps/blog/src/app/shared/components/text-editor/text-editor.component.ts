import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Editor, Toolbar, Validators } from "ngx-editor";
import { take, tap } from "rxjs";
import { createPsalm } from "../../../state/psalm/psalm.actions";
@Component({
  selector: "blog-text-editor",
  templateUrl: "./text-editor.component.html",
  styleUrls: ["./text-editor.component.scss"],
})
export class TextEditorComponent implements OnInit, OnDestroy {
  public editor!: Editor;
  private _document: any;

  @Input() public document = {};
  @Output() public saveEmitter = new EventEmitter();

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

  public form = new FormGroup({
    editorContent: new FormControl(
      { value: null, disabled: false }
      // Validators.required()
    ),
  });

  public get doc(): AbstractControl | null {
    return this.form.get("editorContent");
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.editor = new Editor();

    this.editor.valueChanges
      .pipe(tap((value) => (this._document = value)))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  public save() {
    this.store.dispatch(createPsalm({ psalm: this._document }));
  }
}
