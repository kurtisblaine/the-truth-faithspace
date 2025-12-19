import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LinkComponent } from "../../../shared/components/link-redirect/link.component";
import { ReferenceTooltipComponent } from "../../../shared/components/reference-tooltip/reference-tooltip.component";
import { GospelContentBaseComponent } from "../gospel-content.base.component";

@Component({
  selector: "gospel-call-upon-him",
  imports: [CommonModule, ReferenceTooltipComponent, LinkComponent],
  template: `<ng-container *ngTemplateOutlet="callUponTheLord"></ng-container>
    <ng-template #callUponTheLord>
      Jeremiah says, “Pour out Your wrath on the nations that do not know You And on the families that do not call Your
      name.” (Jeremiah 10:25) For wrath is against the unbelieving who do not call, but salvation is for the believing
      who, by the knowledge of God, call. For everything we have, we obtain from the Lord by grace, so much so even our
      earthly lives were given to us by God as a gift. Or did you work so hard to create yourself? And it is the same
      with the heavenly life: it is given to us from heaven; as John says, "A man can receive nothing unless it has been
      given him from heaven.” (John 3:27) And as Paul was saying, "What do you have that you did not receive? And if you
      did receive it, why do you boast as if you had not received it?” (1 Corinthians 4:7) Thus "You do not have because
      you do not ask.” (James 4:2-3) So much so, we even receive the gift of God by asking with faith; as the Lord Jesus
      says,
      <blog-reference-tooltip [reference]="'Luke 11:13'" [isJesusWord]="true">
        If you then, being evil, know how to give good gifts to your children, how much more will your heavenly Father
        give the Holy Spirit to those who ask Him?
      </blog-reference-tooltip>
      And He gives not because of a lump-some of money or any good work we do, lest it be contrary to the gospel of God;
      as Peter rebuked a man, saying, “May your silver perish with you, because you thought you could obtain the gift of
      God with money!” (Acts 8:20-23) So that everything would be in accordance with grace, which is in line with the
      gospel of God by which every good thing is given through faith; for if we call upon Him, asking in prayer and
      believing to receive, the Lord says,
      <blog-reference-tooltip [reference]="'Matthew 21:22, Mark 11:24, James 1:6-8'" [isJesusWord]="true">
        All things you ask in prayer, believing, you will receive.
      </blog-reference-tooltip>
      And then He says,
      <blog-reference-tooltip [reference]="'Matthew 7:7-8'" [isJesusWord]="true">
        Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. For everyone who
        asks receives, and he who seeks finds, and to him who knocks it will be opened.
      </blog-reference-tooltip>
      <br /><br />

      The Lord, preaching faith in God, namely that He is the Giver of all good things, says,
      <blog-reference-tooltip [reference]="'Luke 6:38'" [isJesusWord]="true">
        Give, and it will be given to you. They will pour into your lap a good measure—pressed down, shaken together,
        and running over. For by your standard of measure it will be measured to you in return.
      </blog-reference-tooltip>
      And,
      <blog-reference-tooltip [reference]="'Mark 11:25-26'" [isJesusWord]="true">
        Whenever you stand praying, forgive, if you have anything against anyone, so that your Father who is in heaven
        will also forgive you your transgressions. But if you do not forgive, neither will your Father who is in heaven
        forgive your transgressions.
      </blog-reference-tooltip>
      For who believing the promises of God, that He is gracious, is not gracious in his giving? And who believing the
      Lord is forgiving, is not merciful in forgiving others? None! The believer gives, believing He will receive, and
      he forgives, believing he will be forgiven; for that is of faith, and certainly, as it is impossible for God to
      lie: He will give and He will forgive. Therefore, ask and believe! The Holy Spirit is given to those who believe,
      and He is the mind of Christ (1 Corinthians 2:16); He knows how to pray according to the will of God, and God,
      searching the hearts of men for the mind of the Spirit (Romans 8:26-27), gives according to grace. And we pray
      through Christ; as the LORD God declares,
      <blog-reference-tooltip [reference]="'Jeremiah 30:21'" [isJesusWord]="true">
        Their leader shall be one of them, And their ruler shall come forth from their midst; And I will bring him near
        and he shall approach Me; For who would dare to risk his life to approach Me?
      </blog-reference-tooltip>
      For our leader is Christ “in whom we have boldness and confident access through faith in Him.” (Ephesians 3:12)
      <br /><br />

      Since we have been reconciled to God through faith in the Word, we clearly see the power of words, especially the
      Word of God, which has the power to save; as the Proverb says, "Death and life are in the power of the tongue, And
      those who love it will eat its fruit." (Proverbs 18:21) So,
      <blog-reference-tooltip [reference]="'2 Corinthians 4:13'">
        Having the same spirit of faith, according to what is written, “I BELIEVED, THEREFORE I SPOKE,” we also believe,
        therefore we also speak.
      </blog-reference-tooltip>
      And then it says,
      <blog-reference-tooltip [reference]="'1 Peter 3:15'">
        Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But
        do this with gentleness and respect.
      </blog-reference-tooltip>
      <blog-reference-tooltip [reference]="'Romans 10:11-13'">
        As Scripture says, "Anyone who believes in Him will never be put to shame.” For there is no difference between
        Jew and Gentile — the same Lord is Lord of all and richly blesses all who call on him, for, 'Everyone who calls
        on the name of the Lord will be saved.'
      </blog-reference-tooltip>
      Christ pours into us His Spirit, creating in us a bubbling brook, a spring of life, whose outpouring is the
      testimony of Jesus. He planted in us His good Word, so that we would bear good fruit of righteousness which
      becomes a tree of life in those who eat; as it says, “The fruit of the righteous is a tree of life, And he who is
      wise wins souls.” (Proverbs 11:30) We feed and give drink, having ourselves first eaten and drunk, pointing to Him
      who saves: Christ Jesus, who is the living water and the tree of life. Therefore, let us bear the name of God
      without reproach, bearing His reproach, walking blamelessly, free from hypocrisy, confessing His name in
      sincerity, and speaking of His righteous works. As Christ called us according to His grace, we call in the
      streets, in the byways, in the highways; for wisdom calls out in the streets (Proverbs 1:20-23, Proverbs 9:3-6).
      And He is not ashamed to call us His brothers, and we are not ashamed to call Him Lord; as it says,
      <blog-reference-tooltip [reference]="'Hebrews 2:11-12'">
        Both He who sanctifies and those who are sanctified are all from one Father; for which reason He is not ashamed
        to call them brethren, saying, "I WILL PROCLAIM YOUR NAME TO MY BRETHREN, IN THE MIDST OF THE CONGREGATION I
        WILL SING YOUR PRAISE."
      </blog-reference-tooltip>
      <br /><br />

      And furthermore Christ says,
      <blog-reference-tooltip [reference]="'Luke 12:8-9'" [isJesusWord]="true">
        I tell you, whoever publicly acknowledges Me before others, the Son of Man will also acknowledge before the
        angels of God. But whoever disowns Me before others will be disowned before the angels of God.
      </blog-reference-tooltip>
      Here is the fruit of salvation: confess the Lord! If we even ask, "Must I confess?" What is preventing you? No-one
      can confess the Lord Jesus except by the Holy Spirit, and I also believe that the Holy Spirit will prevent us from
      confessing if we are living in hypocrisy. It's not they who confess "Jesus is Lord" that are saved, but it is they
      who confess, and live as "Jesus is Lord" that are saved; ["Why do you call Me Lord and not do what I say?" (Luke
      6:46) and "Not everyone who says to Me "Lord, Lord" will enter." (Matthew 7:21)] Know for certain salvation lives
      here: obey and confess Christ! For we have been justified by His blood and we are saved by His life; therefore,
      confess Him publicly, uncover your head and circumcise your heart. See the thirsty land and give drink; do not
      withhold your bread, nor your water from the poor; open up your lid and pour from your vessel. See the fruit of
      your labors and rejoice; and see salvation at work within you and others.
      <blog-link [link]="'https://thelightof.life/drawings/draw/justificationandsalvation'"
        >(See More on Justification and Salvation)
      </blog-link>
      <br /><br />

      Be ready and looking forward to give reason for your hope in Christ. The world always tells about places to eat
      and movies and games: how much more we with such a great news? When we sell a car, we do so by telling the truth:
      the sweet and the bitter about the car; otherwise, when they see the car and it is not what we made it out to be,
      they will not do business with us for the sake of our dishonesty. Likewise, we sell Christ, though Christ isn't
      sold, but freely given to all; anyone who receives Him, it will cost them; but they will gain tenfold, not to
      mention eternal life to come. By telling the truth, we show that our faith is true and living; a faith that is not
      living is dead - a lie; in fact, a belief that has no merit in reality is a delusion. When we do not speak, when
      the Lord puts a word on our tongue, it's stifling the Spirit; we shrink back in disbelief when we do so; and we
      don't love our neighbor as we should. God gives us a good example of the order of events we ought to follow in
      regard to walking and speaking in integrity: first study the Word, then obey it, then teach others. A hypocrite is
      an actor: someone who puts on a mask to play a different part in a different scene; such a person loses his
      identity through deception, deceiving himself in order to play a part (1 John 1:8, James 1:22, James 1:26). All
      actors have to first deceive themselves to play a part; they lie to themselves, saying, "I am such and such." They
      do this so that they would be convincing to others when they act. Likewise we do the same when we're not truly
      obeying the Word of God. This is a counterfeit faith, a false bill, a drossed coin. Our heart and actions should
      never contradict each other lest we be found a hypocrite. When we contradict, we are being hypocritical. But let
      us follow the example of Ezra, the scribe; as it is said of him,
      <blog-reference-tooltip [reference]="'Ezra 7:10'">
        Ezra had set his heart to study the law of the Lord, and to do it and to teach his statutes and rules in Israel. </blog-reference-tooltip
      >And Paul, not wishing for his speech to contradict his life, says,
      <blog-reference-tooltip [reference]="'2 Corinthians 12:6'">
        For if I do wish to boast I will not be foolish, for I will be speaking the truth; but I refrain, so that no one
        will credit me with more than he sees in me or hears from me.
      </blog-reference-tooltip>
      <br /><br />

      The one who believes the Message will come to Jesus for salvation. Salvation comes by the forgiveness of our sins;
      as it says, "To give to His people the knowledge of salvation by the forgiveness of their sins." (Luke 1:77) But
      "Without shedding of blood there is no forgiveness." (Hebrews 9:22) However Jesus is the propitiation for our
      sins. So by going to Him and abiding in Him through faith, we are saved, for salvation is in Him; as it says,
      "There is salvation in no one else; for there is no other name under heaven that has been given among men by which
      we must be saved." (Acts 4:12) Salvation is made possible by the resurrection of Jesus Christ from the dead; for
      how can you go to Him and be saved if He is not? And what Word do we preach, but Christ risen from the dead? As it
      says, "And if Christ be not raised, your faith is vain; you are still in your sins." (1 Corinthians 15:17) So it
      is through faith that we abide in Him, through understanding with our hearts and turning to Him to be saved, for
      this is true understanding; as it says, "UNDERSTAND WITH THEIR HEART AND RETURN, AND I WOULD HEAL THEM." (Acts
      28:27) Furthermore, when we come to Him, we must remain in Him. If we leave our Refuge and do not remain in Him,
      we've left our safety, and are caught outside the city of Refuge, and still yet in danger. So by abiding in
      Christ, He abides in us; if we confess Him, we know we abide in Him; as it says, “Whoever confesses that Jesus is
      the Son of God, God abides in him, and he in God.” (1 John 4:15) As the psalmists says,
      <blog-reference-tooltip [reference]="'Psalm 73:28'">
        As for me, the nearness of God is my good; I have made the Lord GOD my refuge, That I may tell of all Your
        works.
      </blog-reference-tooltip>
      For "No one can say, 'Jesus is Lord,' except by the Holy Spirit." (1 Corinthians 12:3) For He abides in us through
      the Spirit. Therefore "If you confess with your mouth Jesus as Lord, and believe in your heart that God raised Him
      from the dead, you will be saved;” (Romans 10:9) So the way to salvation is to come to Him for forgiveness, which
      is faith, and to abide in Him for confession, which is salvation. Therefore, come to Him and remain in Him!
    </ng-template>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallUponHimComponent extends GospelContentBaseComponent {
  override name: string = "callUponTheLord";
}
