import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LinkComponent } from "../../../shared/components/link-redirect/link.component";
import { ReferenceTooltipComponent } from "../../../shared/components/reference-tooltip/reference-tooltip.component";
import { GospelContentBaseComponent } from "../gospel-content.base.component";

@Component({
  selector: "gospel-scapegoat",
  imports: [CommonModule, ReferenceTooltipComponent, LinkComponent],
  template: `<ng-container *ngTemplateOutlet="theScapegoat"></ng-container>
    <ng-template #theScapegoat>
      <!-- TODO: mystery unresolved -->
      <!-- In the book of Leviticus, there are two instances where two animals were brought for sacrifice: one was slain and
      the other one went off to a distant place,
      <blog-reference-tooltip [reference]="'Leviticus 16'">
        Then Aaron shall lay both of his hands on the head of the live goat, and confess over it all the iniquities of
        the sons of Israel and all their transgressions in regard to all their sins; and he shall lay them on the head
        of the goat and send [it] away into the wilderness by the hand of a man who [stands] in readiness. The goat
        shall bear on itself all their iniquities to a solitary land; and he shall release the goat in the wilderness.
      </blog-reference-tooltip>
      And
      <blog-reference-tooltip [reference]="'Leviticus 14'">
        This shall be the law of the leper in the day of his cleansing. Now he shall be brought to the priest, and the
        priest shall go out to the outside of the camp. Thus the priest shall look, and if the infection of leprosy has
        been healed in the leper, then the priest shall give orders to take two live clean birds and cedar wood and a
        scarlet string and hyssop for the one who is to be cleansed. The priest shall also give orders to slay the one
        bird in an earthenware vessel over running water. "[As for] the live bird, he shall take it together with the
        cedar wood and the scarlet string and the hyssop, and shall dip them and the live bird in the blood of the bird
        that was slain over the running water. He shall then sprinkle seven times the one who is to be cleansed from the
        leprosy and shall pronounce him clean, and shall let the live bird go free over the open field. </blog-reference-tooltip
      ><br /><br /> -->

      <!-- The unclean person defiled by death was sprinkled with the ashes of the heifer on the third and the seventh day,
      and the ashes were mixed with water; and on the seventh day, the unclean washed his clothes and his body with
      water. Likewise,
      <blog-reference-tooltip [reference]="'Hebrews 9:13-14'">
        For if the blood of goats and bulls and the ashes of a heifer sprinkling those who have been defiled sanctify
        for the cleansing of the flesh, how much more will the blood of Christ, who through the eternal Spirit offered
        Himself without blemish to God, cleanse your conscience from dead works to serve the living God?
      </blog-reference-tooltip>
      For we are defiled by death, by dead works, but we are sanctified to God by the blood of Jesus, mixed with the
      water of the Word, united in our conscience by faith, cleansing our hearts by that very same faith. So therefore,
      <blog-reference-tooltip [reference]="'Hebrews 10:22'">
        let us draw near with a sincere heart in full assurance of faith, having our hearts sprinkled clean from an evil
        conscience and our bodies washed with pure water.
      </blog-reference-tooltip> -->

      At the appointed time on the day of Atonement, the high priest confessed the people's sins on to a goat and laid
      his hands on the goat's head. That goat was to carry the sins far away to a remote place in the wilderness and
      die, bearing the sins of the people upon itself as an ordinance given by God. This didn't happen whenever they
      wanted, but at the appointed time, according to the set time given by God. And likewise, "While we were still
      helpless, at the right time"; as it says,
      <blog-reference-tooltip [reference]="'Romans 5:6-11'">
        For while we were still helpless, at the right time Christ died for the ungodly.
      </blog-reference-tooltip>
      For God has cast away our sins to a remote place in Christ Jesus; as the Psalmist says,
      <blog-reference-tooltip [reference]="'Psalms 103:10-13'">
        <b>As far as the east is from the west</b>, So far has He removed our transgressions from us.
      </blog-reference-tooltip>
      And it says,
      <blog-reference-tooltip [reference]="'Micah 7:19'">
        He will again have compassion on us; He will tread our iniquities under foot. Yes, You will cast all their sins
        Into the depths of the sea.
      </blog-reference-tooltip>
      For Jesus is the Scapegoat; He took upon Himself our blame as an offering for guilt; so we are not made to bear
      our guilt ourselves; just as the prophet Isaiah, foreseeing by the Spirit of God, said,
      <blog-reference-tooltip [reference]="'Isaiah 53:10'">
        If He would render Himself as a guilt offering, He will see His offspring, He will prolong His days, And the
        good pleasure of the LORD will prosper in His hand.
      </blog-reference-tooltip>
      For on the day of atonement, the high priest worked and the rest of the people did no work, but yet they were
      commanded to afflict themselves; signifying that it's God's work to remit sins and our work is to humble
      ourselves. For what is less than doing nothing at all? Is it not afflicting yourself? Thus God commanded the
      Israelites: on the day of atonement to use their own strength against themselves through fasting, weeping,
      mourning, and making lamentations - hating themselves for their many sins. Likewise on the holy days and sabbaths
      no work was to be done, and during the festival of Unleavened Bread, they ate "the bread of affliction"
      (Deuteronomy 16:3) to remind them of their slavery in Egypt; for if we do any work, our strength should be used
      against ourselves to humble ourselves, making ourselves weak for the power of God to work in us. For God opposes
      the proud, but gives grace to the humble. This is why they ate the bread of affliction and afflicted themselves on
      the day of atonement; and other than this, they were commanded to do nothing on the holy days. As it says, "You
      shall surely observe My sabbaths; for this is a sign between Me and you throughout your generations, that you may
      know that I am the LORD who sanctifies you.” (Exodus 31:13) So it's God's work to sanctify and cleanse, and we
      enter into His rest through affliction and lowliness and humility of mind. For in weakness God's grace is
      perfected to the effect that we may, by His goodness be filled with all goodness, for there is none good but God;
      and we have free access into His great goodness through faith. The depths of the mercy and grace of the Almighty
      God, who loved us by the death of His Son and continues to love us through the life of His Son; may it never be
      said or thought of again, "God doesn't love me." How He demonstrated His great love for us on the cross at
      Calvary! He didn't merely say, "I love you", but He proved His love in the greatest way possible by giving up His
      own life in the Man of His Presence, choosing us unto adoption as sons. Oh that we would fear God, so that we
      would stay away from all appearances of evil and never depart from Him; that we would know what is good for us,
      for the fear of the Lord is to depart from iniquity; as it says,
      <blog-reference-tooltip [reference]="'Proverbs 16:6'">
        By lovingkindness and truth iniquity is atoned for, And by the fear of the LORD one keeps away from evil. </blog-reference-tooltip
      ><br /><br />

      So when the animal was brought into the temple, the Israelites confessed their error, for they brought the beast
      and spoke to the priest, telling them what it was for: either a sin offering or a guilt offering. And by laying
      their hands on its head, they acknowledged the animal was for them. So there are two confessions: one of sin and
      another of atonement; as it is written by the apostle John, who seen the risen Lord and rested at His bosom; he
      says,
      <blog-reference-tooltip [reference]="'1 John 1:8'">
        If we say we have no sin, we deceive ourselves, and the truth is not in us. If we confess our sins, He is
        faithful and just to forgive us our sins and to cleanse us from all unrighteousness.
      </blog-reference-tooltip>
      For this is how we abide in the truth, and this is how we remain in the light: confession of our sins. It is
      possible to deceive ourselves, but these things are written so that we would not deceive ourselves. When we claim
      we have not sinned, there is no forgiveness since we do not own our sin, even though we have truly sinned. For
      what could we be forgiven of in that case, if we affirm we have not sinned? How can we be forgiven of sin that we
      reject as ours? Let us be truthful and confess our sins, remaining in the light, so that we may be forgiven and
      cleansed from our sins, for with sin comes darkness and death, and in darkness we are not able to see clearly.
      Everyone has been declared guilty by the law, but Christ is the end of the law for righteousness to everyone who
      believes; He grants to us the righteousness which is by faith. For, "We all, with unveiled face, beholding as in a
      mirror the glory of the Lord, are being transformed into the same image from glory to glory, just as from the
      Lord, the Spirit.” (2 Corinthians 3:18) In Christ or without, no-one can be declared righteous by the law, for the
      law declares everyone as sinners; but in Christ, even apart from the law, He makes many righteous through faith by
      His obedient act, for by His righteousness do we know what is right. What is it then, are we righteous sinners? Of
      course not! The law gives sin its power, but Christ justifies us apart from the law, therefore sin has lost its
      strength; as the apostle proclaims, "The power of sin is the law; but thanks to God, which giveth us the victory
      through our Lord Jesus Christ." (1 Corinthians 15:56-57) So while we abide in the grace of God, which is through
      faith, we have no obligation to serve sin which has been rendered powerless by the cross; we have been set free
      from sin in Christ Jesus, and our freedom depends on us abiding in Christ; if we slip or fall into sin, we confess
      it; for we know our sins will be forgiven if we confess, for He will cleanse our guilty conscience. We will know
      we have been forgiven because our guilt will be removed and our heart will no longer condemn us. <br /><br />

      Our Scapegoat took our burdens, our guilt and our shame, so that we would not have to carry them ourselves;
      therefore, confess! If we do not confess our sin, we abide in our sin. God has promised, and it is impossible for
      Him to lie: if we confess, He will forgive. His promises are a sure foundation to build upon. So let us not walk
      around with our burdens, but instead freely give them to Him. Let us not walk with a hunch because of our burdens,
      but let us walk uprightly being freed from our burden; do not be loaded down by guilt; who do we hurt by not
      confessing? I bring about by way of reminder, the Psalmist, who had great anguish because he did not confess his
      iniquity; as he says,
      <blog-reference-tooltip [reference]="'Psalms 32:3-5'">
        When I kept silent [about my sin,] my body wasted away Through my groaning all day long. For day and night Your
        hand was heavy upon me; My vitality was drained away [as] with the fever heat of summer. Selah. I acknowledged
        my sin to You, And my iniquity I did not hide; I said, "I will confess my transgressions to the LORD"; And You
        forgave the guilt of my sin.
      </blog-reference-tooltip>
      And he says in another place,
      <blog-reference-tooltip [reference]="'Psalms 38:1-22'">
        O LORD, rebuke me not in Your wrath, And chasten me not in Your burning anger. For Your arrows have sunk deep
        into me, And Your hand has pressed down on me. There is no soundness in my flesh because of Your indignation;
        There is no health in my bones because of my sin. For my iniquities are gone over my head; As a heavy burden
        they weigh too much for me. My wounds grow foul [and] fester Because of my folly. I am bent over and greatly
        bowed down; I go mourning all day long. For my loins are filled with burning, And there is no soundness in my
        flesh. I am benumbed [deprived of sensation] and badly crushed; I groan because of the agitation of my heart.
        Lord, all my desire is before You; And my sighing is not hidden from You. My heart throbs, my strength fails me;
        And the light of my eyes, even that has gone from me. My loved ones and my friends stand aloof from my plague;
        And my kinsmen stand afar off. Those who seek my life lay snares [for me;] And those who seek to injure me have
        threatened destruction, And they devise treachery all day long. But I, like a deaf man, do not hear; And [I am]
        like a mute man who does not open his mouth. Yes, I am like a man who does not hear, And in whose mouth are no
        arguments. For I hope in You, O LORD; You will answer, O Lord my God. For I said, "May they not rejoice over me,
        [Who,] when my foot slips, would magnify themselves against me." For I am ready to fall, And my sorrow is
        continually before me. For I confess my iniquity; I am full of anxiety because of my sin. But my enemies are
        vigorous [and] strong, And many are those who hate me wrongfully. And those who repay evil for good, They oppose
        me, because I follow what is good. Do not forsake me, O LORD; O my God, do not be far from me! Make haste to
        help me, O Lord, my salvation!
      </blog-reference-tooltip>
      <blog-link [link]="'https://thelightof.life/edifications/edify-detail/eba900e6-909b-1873-e0a3-ef2d8fcc13ed'"
        >(See more about Confessing)</blog-link
      >

      The Lord Jesus is one, and what He did was for many; and the scapegoat for Israel was one goat, but was for the
      whole nation of Israel. And likewise the LORD God, Most High, was pleased with one man, Noah, the man of
      righteousness, and blessed the whole world on account of him because of his one act; as it says,
      <blog-reference-tooltip [reference]="'Genesis 8:21'">
        And the LORD smelled a soothing aroma (of Noah's sacrifice). Then the LORD said in His heart, “I will never
        again curse the ground for man’s sake, although the imagination of man’s heart is evil from his youth; nor will
        I again destroy every living thing as I have done."
      </blog-reference-tooltip>
      Again, He was pleased with another man and blessed the whole world on account of him because of a single act:
      namely Abraham, the man of faith; as it says of him,
      <blog-reference-tooltip [reference]="'Genesis 22:18'">
        In your seed all the nations of the earth shall be blessed, because you have obeyed My voice.
      </blog-reference-tooltip>
      And who can speak against it if I mention the man of zeal, Phinehas? As a type of Christ, for as one man, zealous
      for God, in his act of zeal obtained favor for his descendants forever (Numbers 25:7-13); as it says in the
      Psalms,
      <blog-reference-tooltip [reference]="'Psalms 106:30-31'">
        Then Phinehas stood up and interposed, And so the plague was stayed. And it was reckoned to him for
        righteousness, To all generations forever.
      </blog-reference-tooltip>
      And in regard to Christ, it says, “For zeal for Your house has consumed Me, And the reproaches of those who
      reproach You have fallen on Me.” (Psalms 69:9) And who can forget David, a man after God's own heart? He was given
      a promise and covenant by God concerning His descendants forever; for in his freewill he looked for a dwelling
      place for the LORD God of Israel. So by one act, he obtained a promise for his descendants forever. And Jesus
      Christ, being the fulfillment of all these men, is the One who fulfills all things; He, having obeyed God one time
      at the cross brings salvation to many, un-doing the one act of the one man, Adam, who sinned in the beginning, and
      brings salvation to the whole world, to whoever-so is ordained to eternal life through faith. (Hear what Paul was
      saying about Adam and Christ: Romans 5:12-20, 1 Corinthians 15:21-22) And so by one Man, Jesus Christ, blessing
      has also come to all the nations - not Jews only, but also Gentiles. The promise which was given to Abraham was to
      him and His Seed, which is Christ; and the covenant given to David was to him and his Descendant, which is the
      King to come, Jesus. And we are the descendants of David, the descendants of Abraham, if we are like them; for as
      the father is, so is the son. And this is not according to ancestry or genealogy or according to the flesh, but
      according to the spirit in truth. So all who are like faithful Abraham or willing and pure-hearted David, all who
      are like the Son of God, for they prophesied to Christ, are indeed sons of God, made sons by the Spirit of the
      Son; as it says, “You are all sons of God through faith in Christ Jesus.” (Galatians 3:26) And "All who are being
      led by the Spirit of God, these are sons of God.” (Romans 8:14) So in Christ Jesus the eternal blessing of the
      Jews is brought to the Gentiles; and this is made possible by His obedient act and the irrevocable covenants of
      God. For what is acceptable in God's sight is serving Him in faith, as faithful Abraham, and serving Him with a
      pure conscience, as pure-hearted David, in which these men of old served God and received covenants of friendship
      with God. And we enter into these promises and covenants through faith in Jesus Christ.
      <br /><br />
    </ng-template>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScapegoatComponent extends GospelContentBaseComponent {
  override name: string = "theScapegoat";
}
