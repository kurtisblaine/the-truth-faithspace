import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { Editor, NgxEditorComponent, NgxEditorModule, Toolbar } from "ngx-editor";
import { Subscription } from "rxjs";
@Component({
  selector: "lib-text-editor",
  templateUrl: "./text-editor.component.html",
  styleUrls: ["./text-editor.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, NgxEditorModule, CommonModule, ReactiveFormsModule],
})
export class TextEditorComponent implements OnInit, OnDestroy {
  public editor!: Editor;
  public isReadMore = false;
  public hasData = false;

  private subscription!: Subscription;

  @Input() public document = {};
  @Input() public showReadMore = true;
  @Output() public editorChanged = new EventEmitter();

  @ViewChild("ngxeditor") public editorComponent?: NgxEditorComponent;

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
    this.hasData = !!Object.entries(this.document).length;

    this.editor = new Editor({
      attributes: {
        spellcheck: "true",
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

  ngOnDestroy(): void {
    this.editor?.destroy();
    this.subscription?.unsubscribe();
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }
}
