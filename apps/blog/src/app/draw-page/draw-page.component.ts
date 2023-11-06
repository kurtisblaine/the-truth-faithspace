import { Component, OnInit } from "@angular/core";
interface Image {
  name?: string;
  description: string;
  footer: string;
  originUrl: string;
}
@Component({
  selector: "blog-draw-page",
  templateUrl: "./draw-page.component.html",
  styleUrls: ["./draw-page.component.scss"],
})
export class DrawPageComponent implements OnInit {
  public images: Image[] = [];
  constructor() {}

  ngOnInit(): void {
    this.images.push({
      name: "Covenant Promise",
      description:
        "The promise is available to everyone; pray that many experience the promise which is through faith; the Promise is Christ; we ought to work hard to convince first ourselves then our neighbor, knowing this Good News is for everyone and the Word has the power to save considering we hold fast to our original conviction until the end.",
      footer:
        "We enter into the New Covenant by believing in the Promise of God.",
      originUrl: "../../assets/teach/covenantpromise.png",
    });

    this.images.push({
      name: "Sin, Righteousness, Judgement",
      description:
        "When we believe in Christ, our sins are forgiven by grace; however, it's not a means to continue on sinning while claiming grace. That would get us into the realm of unforgiveable sins which are not covered by the Blood of Christ. We are considered righteous by God because of our faith in Jesus. When we know that, we will walk in the Truth. His sacrifice is sufficient to draw us near to God.",
      footer: "John 16: 8-11",
      originUrl: "../../assets/teach/john16.png",
    });
  }
}
