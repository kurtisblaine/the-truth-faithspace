import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LinkComponent } from "shared";
import { ReferenceTooltipComponent } from "../../../shared/components/reference-tooltip/reference-tooltip.component";
import { GospelContentBaseComponent } from "../gospel-content.base.component";

@Component({
  selector: "gospel-lion",
  imports: [CommonModule, ReferenceTooltipComponent, LinkComponent],
  template: `<ng-container *ngTemplateOutlet="theLion"></ng-container>
    <ng-template #theLion>
      Someone may ask, "What is the testimony of Samson and the lion doing in the Scriptures?" (Judges 14:5-9, 14:12-14)
      A lion is strong and powerful - no doubt about that. No-one certainly takes a lion into their home for their
      children to play - no, they don't! A lion is dangerous; a lion isn't sweet; it won't let you pet it, and it won't
      give you any kisses - not without taking off some of your flesh first! In a similar way, Jesus Christ is mighty
      and powerful; He is the Son of God, with the exact likeness of God, with the name which is above every other name;
      and one of His names is the Lion from the Tribe of Judah; as it says about Him,
      <blog-reference-tooltip [reference]="'Revelation 5:5'">
        See, the Lion of the tribe of Judah, the Root of David, has triumphed.
      </blog-reference-tooltip>
      Jesus walked in power while on earth; He healed many, He spoke with authority; by His Word the devils cried out,
      and they were driven out by His word; the people trembled behind Him as they followed Him; when they came to
      arrest Him, “He said to them, "I am He," they drew back and fell to the ground.” (John 18:6) He was a fearful Man
      among us. Although He was not a criminal and there was no fault in Him, He laid down His life according to the
      will of the Father; His life was not taken from Him, but He went to the cross willingly; as He said before His
      arrest,
      <blog-reference-tooltip [reference]="'Matthew 26:53-54'" [isJesusWord]="true">
        Or do you think that I cannot appeal to My Father, and He will at once put at My disposal more than twelve
        legions of angels? How then will the Scriptures be fulfilled, which say that it must happen this way?
      </blog-reference-tooltip>
      <br /><br />

      So although He is powerful, He became weak willingly for our sakes. His power is manifest in many ways, for He did
      many mighty miracles: He was walking on water, He hushed the wind and waves, and many other fearful things. But as
      Samson's riddle says, "From the Strong came something sweet." And from Christ, the Strong, comes something sweet:
      the sweetness of the Gospel. Bees which have a stinger produce honey in all its sweetness; for God created the bee
      with its stinger, and He created the bee to make honey. In the testimony of Samson, the bees made their honey in
      the carcass of a lion; the bees did not sting the lion, for the lion was dead; instead, the bees made their honey
      in the lion's carcass. Likewise, Jesus is the Lion who died for us to remove the sting of death. For, “The sting
      of death is sin.” (1 Corinthians 15:56) But the sting of death only applies when one is living, but to the dead,
      the sting holds no power; and Christ has died for us, removing the sting of death from us that we may have the
      sweetness of life. The power of death did not hold Christ, for He was raised from the dead and He never dies
      again; if He had not come, He would've never had to die, but He came for this very purpose; and by the One's
      death, “One died for all, therefore all died;” (2 Corinthians 5:14) So that He "might free those who through fear
      of death were subject to slavery all their lives,” (Hebrews 2:15) "So that by the grace of God He might taste
      death for everyone.” (Hebrews 2:9) And from His death, He brings forth a substance of sweetness through the wisdom
      and the power of God; for God makes His wisdom and power salvation unto us who believe; as it says, “The word of
      the cross is foolishness to those who are perishing, but to us who are being saved it is the power of God.” (1
      Corinthians 1:18) And He says, "I WILL DESTROY THE WISDOM OF THE WISE, AND THE CLEVERNESS OF THE CLEVER I WILL SET
      ASIDE." (1 Corinthians 1:19)
      <br /><br />

      So God's wisdom is spoken through spiritual words explained by the Spirit (1 Corinthians 2:12-15). But to those
      who are carnal, the message is foolishness; as a result, His power is against them; but to us who believe, His
      power is for us, not against us; as it was with Daniel's enemies in the lion's den (Daniel 6:7-28); His power
      preserved him so that the lions did not destroy him, but He opened the lion's mouths to tear his enemies. As the
      LORD God says, "I will be like a lion to Ephraim And like a young lion to the house of Judah. I, even I, will tear
      to pieces and go away, I will carry away, and there will be none to deliver. I will go away and return to My place
      Until they acknowledge their guilt and seek My face; In their affliction they will earnestly seek Me.” (Hosea
      5:14-15) Thus God shows to us His incredible strength by His Son's death on the cross; for through His weakness He
      has shown His mighty power unto us who believe; for Jesus gains victory for us even by death - not by many bouts
      of strength, but a single bout of weakness - for He was defeated in death, but overcame death, rising from the
      dead by the power of the Holy Spirit; and not for a single nation only, but for the whole world, both the living
      and the dead. So His great strength is made manifest in weakness. How strong then do you suppose His strength? The
      rulers had not known this power, otherwise they would have not crucified Him, for they did not consider God could
      save the world through the death of His Son. For the life of Christ was a torment to the rulers, that's why they
      sought to put Him to death. So it is, through death the sting of death is removed so that the sweetness of the
      gospel may come. For even nature testifies that the precious is hidden and guarded: gems are found covered in
      soil, gold is found in dark places, and in this testimony, honey is guarded by the pain of a stinger. And so
      likewise, the sweetness of the Gospel is protected by death, that only through death may someone find the
      sweetness of life. For who can be saved unless they behold Christ crucified? So the most preciousness of the
      Gospel is guarded and treasured by the fear of the LORD, judgement, sin and death. [The wisdom of God is also
      protected by the fear of the LORD. As it says, "Where then does wisdom come from? And where is the place of
      understanding? Thus it is hidden from the eyes of all living And concealed from the birds of the sky.” (Job
      28:20-21)]
      <br /><br />

      Then in the latter part of the riddle, it says, "Out of the eater came something to eat". For whenever a sacrifice
      was given to the LORD, He consumed it, He consumed it with fire, for He is a consuming fire. All sacrifices were
      burnt on the altar to God as a soothing aroma; those sacrifices were food to Him; as it says, “The priest shall
      offer them up in smoke on the altar as food.” (Leviticus 3:16) These were offered to God, but out of the Eater of
      sacrifices came a Sacrifice; or in the words of the riddle, "Out of the eater came something to eat." For men
      usually give sacrifices to God, but God gave a sacrifice for the people, the sacrifice of His own Son, so that we
      may offer righteous sacrifices to God, namely, our lives for Him - this is acceptable in God's sight, for He has
      purchased us. From Christ's sacrifice comes forgiveness of sins and justification with God, the seal of the Holy
      Spirit and the sanctification of the Spirit, and everlasting life to come. So although Jesus is powerful as a
      lion, He also is meek and lowly as a lamb; Jesus is the Great Shepherd of the flock, and He is also the Lamb of
      God. Although God is the Eater of sacrifices, He doesn't need us to eat, nor does He need our service; for He
      needs not anything from our hands, but He gives all things; as the LORD God says in the Psalms,
      <blog-reference-tooltip [reference]="'Psalms 50:7-15'">
        I shall take no young bull out of your house Nor male goats out of your folds. For every beast of the forest is
        Mine, The cattle on a thousand hills. I know every bird of the mountains, And everything that moves in the field
        is Mine.
        <b
          >If I were hungry I would not tell you, For the world is Mine, and all it contains. Shall I eat the flesh of
          bulls Or drink the blood of male goats?</b
        >
        Offer to God a sacrifice of thanksgiving And pay your vows to the Most High; Call upon Me in the day of trouble;
        I shall rescue you, and you will honor Me.
      </blog-reference-tooltip>
      <br /><br />

      Is this not according to nature? For we did not create ourselves, but God gave us our lives; we did not invent the
      growth of food; and we don't call to the weather man for rain from the sky - God gives all these things. We
      wouldn't know what a family is unless God gave us a family; we wouldn't know life unless God gave us life. For our
      mother did not spin, nor weave, nor labor so much to create us, did she? Our father did not work so hard to desire
      a woman, did he? Did not God make man cling to his wife? Was it not God who knit us together in our mother's womb?
      Certainly we did not create ourselves, did we? That is why I say, "God gave us our life," because our mother did
      not work hard to create us, nor did our father, nor did we. As it is written, “Just as you do not know the path of
      the wind and how bones are formed in the womb of the pregnant woman, so you do not know the activity of God who
      makes all things.” (Ecclesiastes 11:5) God works all things for us and He also worked a sacrifice for us - He
      needs nothing from our hands, but He gives us all things - even justification and sanctification through Jesus
      Christ. He created us at the first by grace; so in accordance with nature, the new life also comes by grace. And
      so: God, the Father, is the consumer of sacrifices, and He gave a Sacrifice, which is Christ; and these are eaten;
      as He says,
      <blog-reference-tooltip [reference]="'John 6:53'" [isJesusWord]="true">
        Truly, truly, I say to you, unless you eat the flesh of the Son of Man and drink His blood, you have no life in
        yourselves.
      </blog-reference-tooltip>
      <lib-link [link]="baseUrl + '/edifications/edify-detail/7666deae-3d71-86fe-0d07-0f3a29a99599'"
        >(See more about the Riddle)</lib-link
      ><br /><br />

      Although God is greatly kind towards us in Christ, we do not neglect the fear of Him; His kindness is not an
      excuse to be sluggish or lazy, lacking behind in zeal. For He is powerful, but He became weak for our sakes;
      therefore, we ought not to see His kindness as weakness, as some do, for He is mighty in His dealing with us,
      specifically for our building up, not for our tearing down. If we neglect His cloak of righteousness for a cloak
      of maliciousness, certainly He won't treat us any differently than heathens. For He shows no partiality. When I
      was in the military, we had drill instructors and officers. The officers were not like the drill instructors, for
      the drill instructors screamed at us, spitting saliva and speaking crazy; they were not afraid to get in our face.
      They would lay hands on us; often times disciplining us with intense training. But the officers were kind and
      spoke tenderly to us. But one time, we were sitting in class, learning from an officer. We began to slouch in our
      seats, some of us began to sleep because of the officers kindness. But then, yelling more ferociously than any
      drill instructor we have ever heard, he shouted, "Do not take my kindness for weakness!" All of us sat up straight
      in our seats, our spirits reviving within us; those sleeping were shocked with a jolt of fear. Beforetime, he
      would call for readers, and there would be hesitation - by obligation, one person would stand up; but now, a
      handful of volunteers stood up and battled for a chance to read. For we seen he was kind, but he was even more
      powerful than a drill instructor. And as a result of the fear of Christ, it says, “Your people will volunteer
      freely in the day of Your power; In holy array, from the womb of the dawn, Your youth are to You as the dew.”
      (Psalms 110:2-3) Therefore, fear Him! For how can you come to Him without reverence?
      <br /><br />

      And in reference to the Tribe of Judah, Israel had twelve sons, and each son became a branch of Israel. And Jesus,
      as far as His human nature is concerned, came from the tribe of Judah. In Egypt, Judah offered himself in the
      place of his younger brother, Benjamin; as he said,
      <blog-reference-tooltip [reference]="'Genesis 44:18-34'">
        <b>Now please let your servant stay here as my lord’s slave in place of the boy.</b> Let him return with his
        brothers. For how can I go back to my father without the boy? I could not bear to see the misery that would
        overwhelm him.
      </blog-reference-tooltip>
      But Judah never did end up giving his life for his brother. However, now we see Jesus, and His substitution for
      his brethren that He made willingly; and we are His brothers and sisters if we do what He says - for He interceded
      and did what no-one else could do: He stepped down from heaven. Judah did not give up his life, nor was Isaac
      sacrificed, nor was Mordecai impaled on the pole, Joseph was not slain by his brothers; but now we see Jesus,
      chosen by God for the sins of the world, and thereafter live. For Reuben was firstborn of Israel, but he was
      rejected; but in regard to Judah, it says,
      <blog-reference-tooltip [reference]="'Judges 20:18'"> Judah shall go up first. </blog-reference-tooltip>
      (And other such things as these: Numbers 2:9, Judges 1:1-2.) But Judah is not the firstborn of Israel; however he
      was chosen as first by the LORD. So in this, there has not been a true firstborn to receive the right as
      firstborn; for Reuben was rejected, but the blessing was given to another. Just as it was with Esau, who was the
      firstborn, but he was hated; the blessing was given to Jacob; as God says, “Israel is My son, My firstborn.”
      (Exodus 4:22) And Reuben was the firstborn of the unloved, yet the birth right was given to Ephraim, the firstborn
      of the firstborn of the loved; as God says, "Ephraim is My firstborn." (Jeremiah 31:9) And Jacob seeing this, that
      the last is the first, blessed Ephraim over Manasseh, the younger over the older. So now we see Jesus, who is the
      true firstborn; He is the firstborn among many brethren, the firstborn from the dead, He is the beginning - for He
      became last by suffering death in obedience to the Father; and as a result, He was exalted as first in heaven and
      on earth that He may be supreme in everything. And the same to us, for
      <blog-reference-tooltip [reference]="'Matthew 18:4'" [isJesusWord]="true">
        Whoever then humbles himself as this child, he is the greatest in the kingdom of heaven.
      </blog-reference-tooltip>
      <br /><br />

      Judah was chosen by God to be first, and he was chosen as the place where His temple would dwell; as it says, “He
      also rejected the tent of Joseph, And did not choose the tribe of Ephraim, But chose the tribe of Judah, Mount
      Zion which He loved.” (Psalms 78:67-68) As a result, the branch of Judah remained during Israel's rebellion, for
      they were kept by God's grace, by God's promise to David; although the kings of Judah were unfaithful to the LORD
      (2 Kings 8:19, 2 Chronicles 21:7). So God by His gracious choice preserved Judah throughout the rebellion of
      Israel for David's sake whom He also picked from Judah. “In the same way then, there has also come to be at the
      present time a remnant according to God's gracious choice.” (Romans 11:5) For those from Judah represent those who
      trust in God's mercy and keep faith with God. For God chooses to show favor to the lowly and the weak and the
      humble of the earth; as it says of God's choice of Israel,
      <blog-reference-tooltip [reference]="'Deuteronomy 7:7'">
        The LORD did not set His love on you nor choose you because you were more in number than any of the peoples, for
        you were the fewest of all peoples.
      </blog-reference-tooltip>
      And as it says,
      <blog-reference-tooltip [reference]="'Deuteronomy 9:5'">
        It is not for your righteousness or for the uprightness of your heart that you are going to possess their land,
        but it is because of the wickedness of these nations that the LORD your God is driving them out before you, in
        order to confirm the oath which the LORD swore to your fathers, to Abraham, Isaac and Jacob.
      </blog-reference-tooltip>
      So God continues to show His purpose of grace in Christ Jesus, for the sake of the covenants of promise which He
      swore on oath to keep, provided we remain humble in accordance with faith.
      <lib-link [link]="baseUrl + '/drawings/draw/Jesuslionlamb'"
        >(See more about Jesus through Judah and Isaac)</lib-link
      >
    </ng-template>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LionComponent extends GospelContentBaseComponent {
  override name: string = "theLion";
}
