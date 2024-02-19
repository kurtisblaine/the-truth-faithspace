import { Component, Input } from "@angular/core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "blog-audio-play",
  templateUrl: "./audio-play.component.html",
  styleUrl: "./audio-play.component.css",
})
export class AudioPlayComponent {
  public faLink = faArrowUpRightFromSquare;

  @Input() public file: string;
  @Input() public name: string;

  openIframe() {
    window.open(
      "https://drive.google.com/file/d/" + this.file + "/view",
      "_blank"
    );
  }
}
