import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faLinkedin,
  faReddit,
  faSlack,
  faSoundcloud,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: "lib-share",
  imports: [CommonModule, MatButtonModule, FontAwesomeModule, MatTooltipModule],
  template: `
    @if(facebookLink()){
    <a
      mat-mini-fab
      [href]="facebookLink()"
      [matTooltip]="'Facebook'"
      aria-labelledby="Facebook Link"
      aria-label="Facebook Link"
    >
      <fa-icon [size]="'xl'" [icon]="facebookIcon"></fa-icon>
    </a>
    } @if(youtubeLink()){
    <a
      mat-mini-fab
      [href]="youtubeLink()"
      [matTooltip]="'Youtube'"
      aria-labelledby="Youtube Link"
      aria-label="Youtube Link"
    >
      <fa-icon [size]="'xl'" [icon]="youtubeIcon"></fa-icon>
    </a>
    } @if(githubLink()){
    <a
      mat-mini-fab
      [href]="githubLink()"
      [matTooltip]="'Github'"
      aria-labelledby="Github Link"
      aria-label="Github Link"
    >
      <fa-icon [size]="'xl'" [icon]="githubIcon"></fa-icon>
    </a>
    } @if(linkedinLink()){
    <a
      mat-mini-fab
      [href]="linkedinLink()"
      [matTooltip]="'LinkedIn'"
      aria-labelledby="LinkedIn Link"
      aria-label="LinkedIn Link"
    >
      <fa-icon [size]="'xl'" [icon]="linkedinIcon"></fa-icon>
    </a>
    } @if(soundCloudLink()){
    <a
      mat-mini-fab
      [href]="soundCloudLink()"
      [matTooltip]="'Sound Cloud'"
      aria-labelledby="Sound Cloud Link"
      aria-label="Sound Cloud Link"
    >
      <fa-icon [size]="'xl'" [icon]="soundCloudIcon"></fa-icon>
    </a>
    }@if(redditLink()){
    <a
      mat-mini-fab
      [href]="redditLink()"
      [matTooltip]="'Reddit'"
      aria-labelledby="Reddit Link"
      aria-label="Reddit Link"
    >
      <fa-icon [size]="'xl'" [icon]="redditIcon"></fa-icon>
    </a>
    } @if(discordLink()){
    <a
      mat-mini-fab
      [href]="discordLink()"
      [matTooltip]="'Discord'"
      aria-labelledby="Discord Link"
      aria-label="Discord Link"
    >
      <fa-icon [size]="'xl'" [icon]="discordIcon"></fa-icon>
    </a>
    }@if(slackLink()){
    <a mat-mini-fab [href]="slackLink()" [matTooltip]="'Slack'" aria-labelledby="Slack Link" aria-label="Slack Link">
      <fa-icon [size]="'xl'" [icon]="slackIcon"></fa-icon>
    </a>
    }
  `,
  styles: `a[mat-mini-fab] {
    margin: 0px 10px
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareComponent {
  facebookIcon = faFacebook;
  discordIcon = faDiscord;
  githubIcon = faGithub;
  youtubeIcon = faYoutube;
  linkedinIcon = faLinkedin;
  redditIcon = faReddit;
  soundCloudIcon = faSoundcloud;
  slackIcon = faSlack;

  facebookLink = input<string>();
  discordLink = input<string>();
  githubLink = input<string>();
  youtubeLink = input<string>();
  linkedinLink = input<string>();
  redditLink = input<string>();
  soundCloudLink = input<string>();
  slackLink = input<string>();
}
