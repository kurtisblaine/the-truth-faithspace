import { HttpEvent, HttpEventType } from "@angular/common/http";
import { ChangeDetectionStrategy, Component, inject, OnDestroy, signal } from "@angular/core";
import { Router } from "@angular/router";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import {
  faBible,
  faBook,
  faBookmark,
  faBrain,
  faDumbbell,
  faEnvelope,
  faFileAudio,
  faFilePdf,
  faGavel,
  faHandHoldingHeart,
  faInfoCircle,
  faLink,
  faMusic,
  faNewspaper,
  faPenToSquare,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";
import { Subscription } from "rxjs";
import { fadeInOut, SeoBaseComponent, slideInFromLeft, slideInFromRight } from "shared";
import { DownloadService } from "../shared/service/download.service";

@Component({
  selector: "gospel-welcome-page",
  standalone: false,
  templateUrl: "./welcome-page.component.html",
  styleUrl: "./welcome-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInFromRight, slideInFromLeft, fadeInOut],
})
export class WelcomePageComponent extends SeoBaseComponent implements OnDestroy {
  public blogIcon = faDumbbell;
  public psalmIcon = faMusic;
  public discernIcon = faGavel;
  public insightIcon = faBrain;
  public drawingIcon = faPenToSquare;
  public studyIcon = faBook;
  public bookIcon = faBook;
  public pdfIcon = faFilePdf;
  public zipFileIcon = faFileAudio;
  public amazonIcon = faAmazon;
  public responseIcon = faHandHoldingHeart;
  public deathIcon = faSkullCrossbones;

  public mailIcon = faEnvelope;
  public homeIcon = faInfoCircle;

  public tractsIcon = faBookmark;
  public resourceIcon = faLink;
  public gospelIcon = faNewspaper;
  public bibleIcon = faBible;

  public downloadService = inject(DownloadService);
  public progress = signal(0);
  public isDownloading = signal(false);

  private subscription: Subscription;

  constructor(private router: Router) {
    super({
      title: "The Light of Life",
      description:
        "In the dark one must feel their way around, for there is no light for them to see by; but Jesus Christ came into the world as the Light of the world, so that men might walk by Him and have the light of life.",
      canonicalUrl: "https://thelightof.life",
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  downloadZip(filePath: string) {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.isDownloading.set(true);
    this.progress.set(0);

    this.subscription = this.downloadService.downloadZip(filePath).subscribe({
      next: (event: HttpEvent<Blob>) => {
        switch (event.type) {
          case HttpEventType.DownloadProgress:
            if (event.total) {
              this.progress.set(Math.round((event.loaded / event.total) * 100));
            }
            break;
          case HttpEventType.Response:
            this.isDownloading.set(false);
            this.downloadService.saveFile(event.body, "the-good-news-of-the-kingdom-of-god.zip");
            break;
        }
      },
      error: (err) => {
        this.isDownloading.set(false);
      },
    });
  }

  public navigateToTruthPage() {
    this.router.navigateByUrl("/truth");
  }

  public navigateToBibleApp() {
    this.router.navigateByUrl("");
  }
}
