import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SharedModule } from "../../../shared/shared.module";

@Component({
  selector: "gospel-run-the-race",
  imports: [CommonModule, SharedModule],
  template: `<ng-container *ngTemplateOutlet="theRaceOfFaith"></ng-container>
    <ng-template #theRaceOfFaith>
      Run the race of faith! The map is God's Word, the runner's shoes the Gospel of peace, the destination is
      heavenward, the prize eternal life. How we start is how we end: from faith to faith;
      <blog-reference-tooltip [reference]="'1 Corinthians 9:24-27'">
        Do you not know that in a race all the runners run, but <b>only one</b> receives the prize? So run that you may
        obtain it. Every athlete exercises self-control in all things. They do it to receive a perishable wreath, but we
        an imperishable. So I do not run aimlessly; I do not box as one beating the air. But I discipline my body and
        keep it under control, lest after preaching to others I myself should be disqualified.
      </blog-reference-tooltip>
      And,
      <blog-reference-tooltip [reference]="'2 Timothy 2:5, 2 Timothy 4:8'">
        Similarly, anyone who competes as an athlete does not receive the victorʼs crown except by competing according
        to the rules. (...) I have finished the race, I have kept the faith. Now there is in store for me the crown of
        righteousness
      </blog-reference-tooltip>
      And,
      <blog-reference-tooltip [reference]="'Galatians 2:2, Galatians 5:7'">
        I wanted to be sure I was not running and had not been running my race in vain. You were running a good race.
        (...) Who cut in on you to keep you from obeying the truth? </blog-reference-tooltip
      ><blog-link
        [title]="'See more about the Race of Faith'"
        [link]="'https://thelightof.life/#/draw/runtherace.webp'"
      ></blog-link
      ><br /><br />

      No one runs a race for a prize without first training, and they who run, run to win; they strip off every weight
      that slows them down, for the prize; they learn the rules and know exactly what they can and cannot do; runners
      are disciplined in what goes into their body, and they have strict schedules for training; no one runs the race to
      get second place, but first place, otherwise all the training and running would have been in vain. They also learn
      endurance through tribulations. This is used as an illustration of the race we run: the true race by living a life
      of faith in Jesus Christ. As the writer says,
      <blog-reference-tooltip [reference]="'Hebrews 12:2'">
        Let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance
        the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith.
      </blog-reference-tooltip>
      Disciple means "disciplined one" and we are called disciples of Christ; and self-discipline is a fruit of the Holy
      Spirit. Any other discipline that does not come from the Holy Spirit is not truly self-discipline. When I was in
      the military, they told me I would have self-discipline, but what I found was the military disciplined me and my
      discipline did not come from myself; therefore, it was not self-discipline. In fact, when I got out of the
      military, I did all the things I couldn't do while in the military, but to greater degree. For I desired to do
      them, but I couldn't - and this is yet another form of slavery. I didn't do according to my desires, but I willed
      to do so. Is this any different from willing to do good, but not having the ability? In both cases, the will is
      present but the doing is not - still, sin is slavery regardless. So I found that the discipline they tried to
      inflict upon me, actually made me worse; for the things they tried to inflict upon me according to the strength of
      human flesh, had a reverse effect upon me - it strengthened my sinful flesh. But thank God, He gives us the Holy
      Spirit that we may overcome ourselves! As the warning to Abel says,
      <blog-reference-tooltip [reference]="'Genesis 4:7'">
        If you do well, will not your countenance be lifted up? And if you do not do well, sin is crouching at the door;
        and its desire is for you, <b>but you must master it.</b>
      </blog-reference-tooltip>
      <blog-link
        [title]="'See more about True Discipline'"
        [link]="'https://thelightof.life/assets/tract/GoodNewsOfFreedom.pdf'"
      ></blog-link
      ><br /><br />

      We run the race of faith not for a perishable crown, but for an indestructible crown, and that of life. Running
      implies you have a place to go and quickly; and in the context of a race: the finish line. It also implies hard
      work, for running is by no means walking; although our faith is also called a walk, saying,
      <blog-reference-tooltip [reference]="'2 Corinthians 5:7'">
        For we <b>walk</b> by faith, not by sight.
      </blog-reference-tooltip>
      Running is diligence, as it says,
      <blog-reference-tooltip [reference]="'Romans 12:10,11'">
        Be devoted to one another in brotherly love; give preference to one another in honor;
        <b>not lagging behind in diligence</b>, fervent in spirit, serving the Lord;
      </blog-reference-tooltip>
      So when Christ makes our paths straight - run! The world we live in wants to always draw us away from Christ to be
      busy and always rushing in the world; but where are we rushing to? Out of the context of a race, we are running in
      vain, rushing to our death; and what's more vain than death? The Lord says,
      <blog-reference-tooltip [reference]="'Matthew 13:22'" [isJesusWord]="true">
        As for what was sown among thorns, this is the one who hears the word, but the cares of the world and the
        deceitfulness of riches choke the word, and it proves unfruitful.
      </blog-reference-tooltip>
      But if we run the race of faith in Jesus Christ, we run to life eternal. So run! And to win! The race of faith is
      also the good fight; we fight with words of truth by the Spirit, who is our Sword, with words seasoned with salt,
      preserving the truth of God's grace and breaking down every stronghold built up by satan in the hearts of men,
      bringing them into subjection to the truth, so that they may experience salvation. Many will try to enter the
      kingdom, but will be forbidden; many run the race, but only one wins the prize. We must know for certain that not
      everyone will enter by mere will power; as Christ says,
      <blog-reference-tooltip [reference]="'Matthew 7:21'" [isJesusWord]="true">
        Not everyone who says to me, ‘Lord, Lord,’ will enter the kingdom of heaven, but the one who does the will of my
        Father who is in heaven.
      </blog-reference-tooltip>
      And Paul saying,
      <blog-reference-tooltip [reference]="'Romans 9:16'"
        >So then it does not depend on the man who wills or the man who runs, but on God who has
        mercy.</blog-reference-tooltip
      >
    </ng-template>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RunTheRaceComponent {}
