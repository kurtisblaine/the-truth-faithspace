import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LinkComponent } from "shared";
import { ReferenceTooltipComponent } from "../../../shared/components/reference-tooltip/reference-tooltip.component";
import { GospelContentBaseComponent } from "../gospel-content.base.component";

@Component({
  selector: "gospel-holiness",
  imports: [CommonModule, ReferenceTooltipComponent, LinkComponent],
  template: `<div>
    Without question: it's God's presence with us that sets us apart from the rest of the world. Or do you think it's
    merely the oil which consecrates? But what do the Scriptures say? As Moses said to God,
    <blog-reference-tooltip [reference]="'Exodus 33:15-16'">
      How then can it be known that I have found favor in Your sight, I and Your people? Is it not by Your going with
      us, so that we, I and Your people,
      <b>may be distinguished from all the other people who are upon the face of the earth?</b>
    </blog-reference-tooltip>
    And as the LORD God says,
    <blog-reference-tooltip [reference]="'Exodus 29:43'">
      I will also meet with the Israelites there, and that place will be consecrated by My
      glory.</blog-reference-tooltip
    >
    So it is: God's presence sets us apart from everyone else. Just as Balaam, the son of Beor, seen and testified,
    saying, "As I see him from the top of the rocks, And I look at him from the hills; Behold, a people who dwells
    apart, And will not be reckoned among the nations.” (Numbers 23:9) And furthermore, the Gentiles seen that God was
    with Abraham, Isaac, and Jacob; and sought their favor. As the Scriptures say,
    <blog-reference-tooltip [reference]="'Genesis 21:22'"> God is with you in all that you do; </blog-reference-tooltip>
    And they said to Isaac,
    <blog-reference-tooltip [reference]="'Genesis 26:28'">
      We have certainly seen that the LORD is with you,
    </blog-reference-tooltip>
    And they sought covenants of peace with them, and the patriarchs did not deny them. So it is: God alone is holy; and
    He alone sanctifies. He alone is God, and He calls us to godliness. So therefore,
    <blog-reference-tooltip [reference]="'1 Peter 1:14'">
      As obedient children, do not be conformed to the passions of your former ignorance, but as he who called you is
      holy, you also be holy in all your conduct, since it is written, You shall be holy, for I am holy.
    </blog-reference-tooltip>
    <br /><br />

    So the oil of consecration is only a symbol of the consecration which comes from God. As the apostle says, “ You
    have an anointing from the Holy One, and you all know.” (1 John 2:20) In the law, blood was first applied to the
    people and the objects used in worship; for just as water cleanses the body, so the blood cleanses the spirit. Then
    oil is applied to those things to set them apart for ministering to the Lord. And likewise, we are first cleansed by
    the blood, and Christ sanctifies us by His presence; He sets us apart by the Holy Spirit for service; and it's God's
    Spirit who sanctifies. As it says,
    <blog-reference-tooltip [reference]="'Romans 15:16'">
      So that the offering of the Gentiles may be acceptable, <b>sanctified by the Holy Spirit.</b>
    </blog-reference-tooltip>
    For “He saved us, not on the basis of deeds which we have done in righteousness, but according to His mercy,
    <b>by the washing of regeneration and renewing by the Holy Spirit.</b>” (Titus 3:5) Anyone who does not have the
    Spirit of the Lord cannot speak the Word of the Lord, or even understand it, for it is spiritually discerned. The
    Spirit of Truth speaks spiritual words of truth - and by the truth we are sanctified. As Jesus says,
    <blog-reference-tooltip [reference]="'John 17:17-19'" [isJesusWord]="true">
      <b>Sanctify them by the truth; your word is truth.</b> As you sent me into the world, I have sent them into the
      world. For them I sanctify myself, that they too may be sanctified in truth.
    </blog-reference-tooltip>
    And as the apostle says,
    <blog-reference-tooltip [reference]="'Ephesians 5:25-27'">
      Husbands, love your wives, just as Christ also loved the church and gave Himself up for her,
      <b>so that He might sanctify her, having cleansed her by the washing of water with the word. </b>
    </blog-reference-tooltip>
    But if we do not believe the Word of God, then the truth is not united in us; for without faith, sanctification is
    impossible. As Jesus says,
    <blog-reference-tooltip [reference]="'Acts 26:18'" [isJesusWord]="true">
      that they may receive forgiveness of sins and an inheritance among those
      <b>who have been sanctified by faith in Me.</b>
    </blog-reference-tooltip>
    And as the apostle says,
    <blog-reference-tooltip [reference]="'2 Thessalonians 2:13'">
      God has chosen you from the beginning for salvation
      <b>through sanctification by the Spirit and faith in the truth.</b>
    </blog-reference-tooltip>
    But what have we come to believe in? What is the knowledge? What is the message? As it says,
    <blog-reference-tooltip [reference]="'Hebrews 13:12'">
      Jesus also, that He might <b>sanctify</b> the people through His own blood, suffered outside the gate.
    </blog-reference-tooltip>
    For “By His doing you are in Christ Jesus, who became to us wisdom from God,
    <b>and righteousness and sanctification,</b> and redemption, so that, just as it is written, "LET HIM WHO BOASTS,
    BOAST IN THE LORD.” (1 Corinthians 1:30-31) For it is the Lord's work to sanctify us; and it is our work to
    believe.<br /><br />

    If we obey God, it will lead to holiness; and we will be holy like Him, for He alone is holy. Those who wish to be
    used honorably of Him must themselves be holy. Unholy talk is that which is commonly seen in the world: meaningless
    chatter, myths, fables, anything that doesn't tell of the blessed God and Savior. No-one can tell of Christ except
    by the Holy Spirit, which is the spirit of prophecy. The Spirit which is from above is holy, which you have received
    if you have received the Word of Truth. If we purify ourselves from the world and its filth, we will be set apart
    for holy use; as it says,
    <blog-reference-tooltip [reference]="'2 Timothy 2:21'">
      If anyone cleanses himself from the latter (common articles), he will be a vessel for honor, sanctified and useful
      for the Master, prepared for every good work.
    </blog-reference-tooltip>
    Obedience leads to holiness, righteousness leads to sanctification; and with holiness comes salvation. As it says,
    “Pursue peace with all men, and the sanctification without which no one will see the Lord.” (Hebrews 12:14)
    Consecration is moving from what is earthly to what is heavenly, from what is bad to what is good. We do not belong
    to ourselves, but we belong to God. We were bought with a price. Our life does not belong to us, for everything
    belongs to the LORD; and how much more so now that He bought us? For when we were slaves of sin, we were constantly
    serving sin. But now, God calls us to be obedient from the heart. We ought to willingly submit ourselves to Him as
    bond-servants, putting our ear to the awl (Exodus 21:5-6), saying, "I love my master, my wife and my children; I
    will not go out as a free man.” (Exodus 21:5) Or saying, as the Psalmist says, “My life is continually in my hand,
    Yet I do not forget Your law.” (Psalms 119:109) For we were released from our captivity to the law, and now use our
    freedom in Christ to serve God in righteousness. For the law of God either binds the disobedient or grants freedom
    to the obedient. As James calls the law, "The perfect law, the law of liberty." (James 1:25) But the apostle Paul
    calls the law, "The ministry of death," (2 Corinthians 3:7) and "The ministry of condemnation." (2 Corinthians 3:9)
    So if we fulfill the law, we live in the freedom, and rest in life of God; but if we disobey, we lie in the depths
    of slavery, toil, and death in sin.
    <lib-link [link]="baseUrl + '/edifications/edify-detail/ccb334ab-3719-49b4-a690-1416ad4d1265'">
      (See more on Submission to Authority)</lib-link
    >
    <br /><br />

    I wrote beforehand concerning holiness of the heart, but it works outwardly to the body as well. But I ask, "What is
    more true: the body or the spirit?" Surely the spiritual is more true - but if anything be true in spirit, it will
    be manifested physically too. As the apostle Paul commands in the name of the Lord Jesus,
    <blog-reference-tooltip [reference]="'1 Thessalonians 4:3-8'">
      It is Godʼs will that you should be sanctified: that you should avoid sexual immorality; that each of you should
      learn to control your own body in a way that is holy and honorable, not in passionate lust like the pagans, who do
      not know God; and that in this matter no one should wrong or take advantage of a brother or sister. The Lord will
      punish all those who commit such sins, as we told you and warned you before. For God did not call us to be impure,
      but to live a holy life. Therefore, anyone who rejects this instruction does not reject a human being but God, the
      very God who gives you his Holy Spirit.
    </blog-reference-tooltip>
    <blog-reference-tooltip [reference]="'1 Corinthians 6:18-20'">
      Flee from sexual immorality. Every other sin a man can commit is outside his body, but he who sins sexually sins
      against his own body. Do you not know that your body is a temple of the Holy Spirit who is in you, whom you have
      received from God? You are not your own; you were bought at a price. Therefore glorify God with your body.
    </blog-reference-tooltip>
    Everyone who believes the Word corrects themselves to it. So obey the truth. “Therefore, putting aside all
    filthiness and all that remains of wickedness, in humility receive the word implanted, which is able to save your
    souls.” (James 1:21) For obedience shows that we love God. As the Lord Jesus says,
    <blog-reference-tooltip [reference]="'John 14:15'" [isJesusWord]="true">
      If you love Me, you will keep My commandments.
    </blog-reference-tooltip>
    And,
    <blog-reference-tooltip [reference]="'John 15:10'" [isJesusWord]="true">
      If you keep My commandments, you will abide in My love; just as I have kept My Father's commandments and abide in
      His love.
    </blog-reference-tooltip>
    <lib-link [link]="baseUrl + '/drawings/draw/sanctification-defined'"> (See more on Sanctification)</lib-link>
  </div>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HolinessComponent extends GospelContentBaseComponent {
  override name: string = "obedience-to-holiness";
  public override description: string =
    "Listen to the voice of the Lord! This is obedience; and obedience leads to holiness and holiness to eternal life. Eat the fruit of your ways and be satisfied.";
}
