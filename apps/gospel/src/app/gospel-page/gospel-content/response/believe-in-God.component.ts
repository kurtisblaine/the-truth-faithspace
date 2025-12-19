import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ReferenceTooltipComponent } from "../../../shared/components/reference-tooltip/reference-tooltip.component";
import { GospelContentBaseComponent } from "../gospel-content.base.component";

@Component({
  selector: "gospel-believe-in-god",
  imports: [CommonModule, ReferenceTooltipComponent],
  template: `<ng-container *ngTemplateOutlet="believeInGod"></ng-container>
    <ng-template #believeInGod>
      After we have died and been buried, united with Christ, it is necessary for us to be alive to something else. By
      default, we all want to gravitate back towards what we already know: which is sin; but we have died to sin, so how
      can we live in it any longer? Therefore, we move forward to faith in God, leaving behind what is dead and moving
      to the life which is truly life. We are not called to repent and then turn to obedience to the law, which consists
      of 613 commandments, a yoke too burdensome for us to bear. But rather, we are called to repent and
      <i>believe</i>; as He says,
      <blog-reference-tooltip [reference]="'Mark 1:15'" [isJesusWord]="true">
        The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel.
      </blog-reference-tooltip>
      Since faith is emphasized, does that mean we don't keep the law? No! On the contrary, it's only when we have faith
      do we truly observe the law. The whole of the law is summed up in one command: "Love your neighbor as yourself"
      (Galatians 5:14). And we love others when we abide in Christ's love. How can we give love when we have none
      ourselves? So our obedience lies in staying rooted in Christ, abiding in Him through faith, trusting in His
      kindness; otherwise, we will be cut off (Romans 11:22). He gives us love to love Him and our fellow brother; He
      blesses us to bless others (Genesis 12:2); He shines light on us to be illuminated and a light (Ephesians 5:8-13).
      Without Him first loving us, we cannot love a stranger; as it says, "We love because He first loved us." (1 John
      4:19) Whatever we are lacking, the answer is always found in Christ Jesus our Lord; for He freely gives us the
      riches of knowledge and wisdom and revelation of His grace, fully equipping us for every good work - and no work
      for the Lord is ever in vain! So you see, the truth sets us free; and Jesus is the Truth; and Truth is worked in
      us, and out of us through the power and inward working of His love;
      <blog-reference-tooltip [reference]="'Galatians 5:6'">
        For in Christ Jesus neither circumcision nor uncircumcision means anything, but faith working through love.
      </blog-reference-tooltip>
      As the Lord says,
      <blog-reference-tooltip [reference]="'John 13:34-35'" [isJesusWord]="true">
        A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one
        another. By this all people will know that you are my disciples, if you have love for one another.
      </blog-reference-tooltip>
      For through faith, the old becomes new. And through the truth, He makes us free. The truth saves; as Paul says,
      <blog-reference-tooltip [reference]="'1 Timothy 4:16'">
        Take heed to yourself and to the doctrine. Continue in them, for in doing this you will
        <b>save both yourself and those who hear you.</b>
      </blog-reference-tooltip>
      And we are born again by faith in the truth; and if we continue in the truth until the end, we will have a sure
      reward. Let no-one defraud you of the prize.
      <br /><br />

      For Christ Jesus died and was buried and rose from the dead, giving us right standing with God the Father, having
      reconciled us to God, restoring fellowship with Him through His earthly body; He gave unto us freely by His grace
      right standing with Himself. And we have come to receive this wonderful gift of grace through faith. And He opened
      the eyes of our mind to the Gospel of Jesus Christ, and cut away the hardness of our hearts with a circumcision
      made not by human hands. He did this when we believed; and if when we believed, we were changed, how then shall we
      persevere? Is it not through continually observing Jesus Christ until the end of this age or death? Hence, we walk
      continually in faith, from start to finish. Faith is always; it's how we start and how we end. As Paul says, "From
      faith to faith" (Romans 1:17). And "a law of faith." (Romans 3:27) And, "The author and finisher of our faith."
      For Christ is the First and the Last, the Beginning and the End. As He said,
      <blog-reference-tooltip [reference]="'John 14:1'" [isJesusWord]="true">
        Do not let your heart be troubled; believe in God, believe also in Me.
      </blog-reference-tooltip>
      Faith is the tunnel into God's grace just as Jesus is the Mediator between us and God: He is the Son of Man and
      the Son of God. And He will perfect us in Himself unto the day of His coming, for He makes us blameless and
      acceptable in His sight. As an example for us, the Psalmists constantly did faithful things; and these are written
      about in the Psalms: for they prayed and gave thanks to God, and confessed Him in the assembly; they meditated on
      His law and spoke truth to their neighbors; they were continually praising Him; they gave heed to His Word. These
      are all works of the Spirit, a work of faith. When our hearts are pure, we will produce good fruits. When the
      inside is clean, then the outside will be clean too (Matthew 23:26). <br /><br />

      The rationale for every command is Jesus Christ. The apostles gave commands in their letters, oftentimes with
      three things: a prohibition, a remedy, and a rationale. The prohibition is what we should not do, the remedy is
      what we should do instead, and the rationale is the reason why. The reason why for every command is Christ; and
      this is also the way of faith: everything brings us back to Christ, for He is the Way. So whatever you do to
      others, you do unto yourself (2 Corinthians 5:10); and whatever you do to the least of these, you do unto Christ
      (Matthew 25:31-46); if you sin against a brother, you sin against Him (1 Corinthians 8:12). If you do evil, you
      will reap it (Colossians 3:25); if you do good, God will repay it (Ephesians 6:8). So then why not do good? If you
      do good unto others, it will come back unto you. Not only one person is benefited, but two - he and you! And God
      is glorified. Jesus is the example for us to follow; so as obedient children, imitate Him and learn from Him. We
      shouldn't be led astray by mere human commands, which have to be sure an appearance of wisdom in promoting severe
      treatment of the body and asceticism, but are of no use in stopping the indulgence of the flesh (Colossians 2:23);
      these are not the way, but a dead end.
      <blog-reference-tooltip [reference]="'Ephesians 5:1-33'">
        Therefore be imitators of God, as beloved children; and walk in love,
        <b> just as Christ also loved you and gave Himself up for us</b>, an offering and a sacrifice to God as a
        fragrant aroma. (...) Husbands, love your wives,
        <b> just as Christ also loved the church and gave Himself up for her.</b>
        (...) for no one ever hated his own flesh, but nourishes and cherishes it,
        <b> just as Christ also does the church</b>, because we are members of His body.
      </blog-reference-tooltip>
      So we do because of what He has done; for our faith is by the knowledge of God through the face of Jesus Christ,
      His Son. He is the only one who has seen God, and He has revealed Him to us. And we see the Father through the
      Son; and we see the Son through faith. In the Son there is the knowledge of God; and by the knowledge of Him, we
      become imitators; as it says,
      <blog-reference-tooltip [reference]="'Jeremiah 22:15,16'">
        "He pled the cause of the afflicted and needy; then it was well.
        <b>Is not that what it means to know Me?</b>" Declares the LORD.
      </blog-reference-tooltip>
      And the LORD God says, “I delight in loyalty rather than sacrifice, And in the knowledge of God rather than burnt
      offerings.” (Hosea 6:6) So by the knowledge of God through the face of Jesus, we have life. For I ask, "What have
      you come to believe, except the testimony about God?" And without question, God's actions speak louder than words;
      for in Christ, He remained silent until this present time so that forgiveness may be preached. Even before His
      accusers, He demonstrated His love apart from words, for He remained silent. But nevertheless, He, by His grace,
      even preserved for us His words. And I thank God for that! Therefore, seek the knowledge of God. Or, as it says,
      "My people are destroyed for lack of knowledge." (Hosea 4:6) But we who have believed, have been saved through the
      knowledge of God; as Christ says,
      <blog-reference-tooltip [reference]="'John 17:3'" [isJesusWord]="true">
        This is eternal life, that they may know You, the only true God, and Jesus Christ whom You have sent.
      </blog-reference-tooltip>
      For God desires that “all men to be saved and to come to the knowledge of the truth.” (1 Timothy 2:4) And faith is
      simple - a child can do it. Believing is following - just as a son follows his father and imitates what he sees
      his father doing; so likewise, those of us who have seen God, imitate Him - that's what it means to know Him, to
      be a son of God, and to be born of Him. A man is a hypocrite when he is godless in heart; although appearing godly
      outwardly, he's godless inwardly. A hypocrite is only an actor, a contradiction; but God knows the truth, for He
      sees man as he is; and "The Lord knows those who are His." (2 Timothy 2:19)
    </ng-template>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BelieveInGodComponent extends GospelContentBaseComponent {
  override name: string = "believeInGod";
}
