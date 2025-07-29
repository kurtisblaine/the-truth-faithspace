import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ReferenceTooltipComponent } from "../../../shared/components/reference-tooltip/reference-tooltip.component";
import { GospelContentBaseComponent } from "../gospel-content.base.component";

@Component({
  selector: "gospel-toil",
  imports: [CommonModule, ReferenceTooltipComponent],
  template: `<ng-container *ngTemplateOutlet="workAndToil"></ng-container>
    <ng-template #workAndToil>
      Our lives are filled with work and toil: we work then rest, and do it all over again the next day. The days do not
      cease, they do not lag behind for anybody; they are short, yet we spend them in much pain and agony because of our
      labors. The days are short because of our human weakness; each one is fit for the strength of a man. And what
      drives our inner strength? For what reason do we toil so much? As it says,
      <blog-reference-tooltip [reference]="'Ecclesiastes 4:4'">
        I have seen that every labor and every skill which is done is the result of rivalry between a man and his
        neighbor. This too is vanity and striving after wind.
      </blog-reference-tooltip>
      As it says, "Every labor is the result of rivalry", which does not matter in the future; we work for the sake of
      man who perishes, as we too are perishing; we work for objectives that are not ours, for fruit that we will not
      eat; for we leave the fruit of our labors to another who comes after us. As it is written, “We have brought
      nothing into the world, so we cannot take anything out of it either.” (1 Timothy 6:7) The things we do now will
      not matter years from now, it will become old and outdated. In the future, people will look back and say, "Who
      were they?" As it is today, for we presently do not care who were in the past; and it will be the same in the
      future: they will not care for us; even if we think, "I do care," what does our boasting accomplish? No-one can
      bring back a day which has been spent. We are constantly striving in labor, yet we don't receive our due wages; he
      who does little work, harvests much, and we are dumb-founded; we do much work for little harvest; we work hard for
      the holes in our pockets; we plant, and the locusts eat; we plant much, but gather very little. As it says, "You
      have sown much, but harvest little; you eat, but there is not enough to be satisfied; you drink, but there is not
      enough to become drunk; you put on clothing, but no one is warm enough; and he who earns, earns wages to put into
      a purse with holes." (Haggai 1:6) It is a grievous task which has been given to us! As it says,
      <blog-reference-tooltip [reference]="'Ecclesiastes 1:13-14'">
        I set my mind to seek and explore by wisdom concerning all that has been done under heaven. It is a grievous
        task which God has given to the sons of men to be afflicted with. I have seen all the works which have been done
        under the sun, and behold, all is vanity and striving after wind.
      </blog-reference-tooltip>
      And furthermore it says,
      <blog-reference-tooltip [reference]="'Ecclesiastes 4:8'">
        There was a certain man without a dependent, having neither a son nor a brother, yet there was no end to all his
        labor. (...) This too is vanity and it is a grievous task.
      </blog-reference-tooltip>
      <br /><br />

      So surely we are born into travail, born for trouble; as it says, "For man is born for trouble, As sparks fly
      upward." (Job 5:7) All our days are struck with evil. We don't know where we are going, and we don't remember
      where we came from; we aren't fully aware of even today; we're in a box without the ability to look out. And even
      if we had 1000 lives of 1000 years a piece, we wouldn't be able to discover all that is set before us; how much
      less the things we don't see? As it says, “For all our days have declined in Your fury; We have finished our years
      like a sigh. As for the days of our life, they contain seventy years, Or if due to strength, eighty years, Yet
      their pride is but labor and sorrow; For soon it is gone and we fly away.” (Psalms 90:9-10) We chase after things
      we think will satisfy us, but we catch them and see that they are empty; we are chasing after the wind; as it
      says, “For they sow the wind And they reap the whirlwind. The standing grain has no heads; It yields no grain.
      Should it yield, strangers would swallow it up.” (Hosea 8:7) We are born into a miserable existance! So are we
      even better off than the animals? For they come in futility and they leave in futility just as it is with us; as
      it says,
      <blog-reference-tooltip [reference]="'Ecclesiastes 3:19'">
        For what happens to the sons of men also happens to animals; one thing befalls them: as one dies, so dies the
        other. Surely, they all have one breath; <b>man has no advantage over animals,</b> for all is vanity.
      </blog-reference-tooltip>
      All living creatures die; what lives forever? Everything we strive and labor for, we do not keep; we strive for
      beauty, but it is fading away. Our possessions become the possessions of another. Even our own lives are borrowed,
      for we will return to the dust. Listen to what the King of Israel wrote toward the end of his life:
      <blog-reference-tooltip [reference]="'Ecclesiastes 2:18-23'">
        I hated all my toil in which I toil under the sun, seeing that I must leave it to the man who will come after
        me, and who knows whether he will be wise or a fool? Yet he will be master of all for which I toiled and used my
        wisdom under the sun. This also is vanity. So I turned about and gave my heart up to despair over all the toil
        of my labors under the sun, because sometimes a person who has toiled with wisdom and knowledge and skill must
        leave everything to be enjoyed by someone who did not toil for it. This also is vanity and a great evil. What
        has a man from all the toil and striving of heart with which he toils beneath the sun? For all his days are full
        of sorrow, and his work is a vexation. Even in the night his heart does not rest. This also is vanity.
      </blog-reference-tooltip>
      But what is vanity? Futility is worthlessness, emptiness, aimlessness, not having a point or direction, wandering
      about in blackest darkness. It does not see; it is always doing much, but it is accomplishing little; it is
      speaking much, but getting nothing done; it is dreaming, but living as a passing shadow. What then, do we despair?
      But isn't that vain as well, a work of the wind? Why should we despair when there is hope.
      <br /><br />

      Life is short, yet it feels long. In life, we despair, without it, there is no hope either. We spend our lives
      wasting on things that will pass away. We are passing away. In the place of the dead, in which we are going, there
      is nothing: no toil, no labor, no speech, no sight, nothing. We have inherited this life, not because we asked for
      it, for we did not even ask to be born, but because of the sin of Adam in the Garden, we have been given this kind
      of life. All people on earth come from him and we inherit sin and death from him; he transgressed the commandment,
      and judgment was pronounced on the earth because of him; as the curse pronounced says,
      <blog-reference-tooltip [reference]="'Genesis 3:18-20'">
        Cursed is the ground because of you; In toil you will eat of it all the days of your life. Both thorns and
        thistles it shall grow for you; And you will eat the plants of the field; By the sweat of your face You will eat
        bread, Till you return to the ground, Because from it you were taken; For you are dust, And to dust you shall
        return.
      </blog-reference-tooltip>
      So our toil is a curse from God because of the sin of Adam; the curse came from God because of sin; as the LORD
      God Himself says,
      <blog-reference-tooltip [reference]="'Deuteronomy 33:39-42'">
        See now that I, I am He, And there is no god besides Me; It is I who put to death and give life. I have wounded
        and it is I who heal, And there is no one who can deliver from My hand.
      </blog-reference-tooltip>
      And then He says,
      <blog-reference-tooltip [reference]="'Isaiah 45:5-7'">
        I am the LORD, and there is no other; Besides Me there is no God. (...) The One forming light and creating
        darkness, Causing well-being and creating calamity; I am the LORD who does all these.
      </blog-reference-tooltip>
      And it also says, “Is it not indeed from the LORD of hosts That peoples toil for fire, And nations grow weary for
      nothing?” (Habakkuk 2:13) But who are we to quarrel with our Maker? If we dare speak to Him, will He be compelled
      to answer? But if He calls to us, we must answer Him. As it says, “But the LORD is in His holy temple. Let all the
      earth be silent before Him." (Habakkuk 2:20) For who can take God to court? Or who can accuse Him?
      <br /><br />

      But rather, it says,
      <blog-reference-tooltip [reference]="'Ecclesiastes 2:24-26'">
        There is nothing better for a man than to eat and drink and tell himself that his labor is good. This also I
        have seen that it is from the hand of God. For who can eat and who can have enjoyment without Him? For to a
        person who is good in His sight He has given wisdom and knowledge and joy, while to the sinner He has given the
        task of gathering and collecting so that he may give to one who is good in God's sight. This too is vanity and
        striving after wind.
      </blog-reference-tooltip>
      Also it says,
      <blog-reference-tooltip [reference]="'Ecclesiastes 4:6'">
        One hand full of rest is better than two fists full of labor and striving after wind.
      </blog-reference-tooltip>
      Therefore it is better to accept your lot in life and be happy with it. Search and seek for the LORD God;
      acknowledge your futility and search and seek for fullness in God, not in the things of the world. For if the
      things of the world were pleasing to us, then we wouldn't be seeking for anything more. Will that which has no
      breath satisfy us? And if we think the living will satisfy us, won't it one day cease? But much greater is God who
      gives all things by which all things came into being! He lives and does not cease living. And the Lord has
      promised,
      <blog-reference-tooltip [reference]="'Jeremiah 29:13'">
        You will seek Me and find Me when you search for Me with all your heart.
      </blog-reference-tooltip>
      As it says, "seek Me with all your heart", for He knows your heart and how much heart you have, for He has given
      your heart; He seen beforetime when the widow gave all her income (Mark 12:42-43), and He seen when Ananias kept
      back some of the money from the field which he sold (Acts 5:1-4). He knows the amount He has allotted. So if we
      have little heart, with all our little heart, therein seek; or if we have great heart, with all our great heart
      therein seek. He knows when we hold back, for He knows the measure which He has measured out. Therefore be unhappy
      with your futility and search for answers. Do not follow the example of the disobedient who love their futility.
      See how the disobedient try to resist God, trying to reverse the curses which God has pronounced on the earth:
      thinking their life is forever, they fall into error; thinking their home is forever, they believe a lie. See how
      the world tries to reverse things: for God gave woman pain in child-bearing, but they give numbing shots; for God
      made woman desire for her husband, yet he rules over her, but they start feminist movements; for God cursed the
      ground so that in toil it will produce its fruit, but they create technology that works at the push of a button;
      for God makes man to return to the dust in old age, but they have beauty products and wrinkling agents and plastic
      surgery; but whatever we try to do, we cannot reverse death: all of us will return to Him in the end, slave and
      free, rich and poor. So you see, our lives are set this way by God to lead us to Himself, for by the things of the
      world He sees to it that no man shall see the light of life.
    </ng-template>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToilComponent extends GospelContentBaseComponent {
  override name: string = "workAndToil";
}
