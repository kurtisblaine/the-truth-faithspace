import { Component, OnDestroy, OnInit } from "@angular/core";
import { Editor } from "ngx-editor";

@Component({
  selector: "blog-text-editor",
  templateUrl: "./text-editor.component.html",
  styleUrls: ["./text-editor.component.scss"],
})
export class TextEditorComponent implements OnInit, OnDestroy {
  public editor!: Editor;
  public html = "";

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
