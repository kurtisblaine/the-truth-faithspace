import { ComponentType } from "@angular/cdk/overlay";
import { Injectable, OnDestroy } from "@angular/core";
import { AbideComponent } from "../gospel-content/call-faith/abide.component";
import { BornAgainComponent } from "../gospel-content/call-faith/born-again.component";
import { ClearConscienceComponent } from "../gospel-content/call-faith/clear-conscience.component";
import { NewHeartComponent } from "../gospel-content/call-faith/new-heart.component";
import { RunTheRaceComponent } from "../gospel-content/call-faith/run-the-race.component";
import { BronzeSerpentComponent } from "../gospel-content/call-grace/bronze-serpent.component";
import { FoodDrinkComponent } from "../gospel-content/call-grace/food-drink.component";
import { LambComponent } from "../gospel-content/call-grace/lamb.component";
import { LionComponent } from "../gospel-content/call-grace/lion.component";
import { RockComponent } from "../gospel-content/call-grace/rock.component";
import { SalvationComponent } from "../gospel-content/call-grace/salvation.component";
import { ScapegoatComponent } from "../gospel-content/call-grace/scapegoat.component";
import { ServantComponent } from "../gospel-content/call-grace/servant.component";
import { SonComponent } from "../gospel-content/call-grace/son.component";
import { VictorComponent } from "../gospel-content/call-grace/victor.component";
import { DeathComponent } from "../gospel-content/danger-death/death.component";
import { PleasureComponent } from "../gospel-content/danger-death/pleasure.component";
import { ToilComponent } from "../gospel-content/danger-death/toil.component";
import { WealthComponent } from "../gospel-content/danger-death/wealth.component";
import { ConsumingFireComponent } from "../gospel-content/danger-sin/consuming-fire.component";
import { HeKnowsComponent } from "../gospel-content/danger-sin/he-knows.component";
import { JudgementDayComponent } from "../gospel-content/danger-sin/judgement-day.component";
import { SinNatureComponent } from "../gospel-content/danger-sin/sin-nature.component";
import { GospelContentBaseComponent } from "../gospel-content/gospel-content.base.component";
import { EternalRewardComponent } from "../gospel-content/hope-life/eternal-reward.component";
import { EverlastingLifeComponent } from "../gospel-content/hope-life/everlasting-life.component";
import { NewHeavenEarthComponent } from "../gospel-content/hope-life/new-heaven-earth.component";
import { ResurrectionComponent } from "../gospel-content/hope-life/resurrection.component";
import { SpiritualBodyComponent } from "../gospel-content/hope-life/spiritual-body.component";
import { BaptismComponent } from "../gospel-content/response/baptism.component";
import { BelieveInGodComponent } from "../gospel-content/response/believe-in-God.component";
import { CallUponHimComponent } from "../gospel-content/response/call-upon-Him.component";
import { HolinessComponent } from "../gospel-content/response/holiness.component";
import { PersevereComponent } from "../gospel-content/response/persevere.component";
import { RepentComponent } from "../gospel-content/response/repent.component";
import { WorthyOfCallComponent } from "../gospel-content/response/worthy-of-call.component";

type ComponentMetaData = {
  component: ComponentType<GospelContentBaseComponent>;
  section: string;
  audioFile?: string;
};

@Injectable({
  providedIn: "root",
})
export class GospelItemService implements OnDestroy {
  private components = new Map<string, ComponentMetaData>();

  init() {
    if (this.components.size) return this.components;

    //The Danger - Sin
    this.components.set("the-sin-nature", {
      component: SinNatureComponent,
      section: "The Danger - Sin",
      audioFile: "v1782934611/audio/1-the-danger-sin/1-sin-nature.mp3",
    });
    this.components.set("god-knows", {
      component: HeKnowsComponent,
      section: "The Danger - Sin",
      audioFile: "v1782934611/audio/1-the-danger-sin/2-god-knows.mp3",
    });
    this.components.set("a-consuming-fire", {
      component: ConsumingFireComponent,
      section: "The Danger - Sin",
      audioFile: "v1782934611/audio/1-the-danger-sin/3-a-consuming-fire.mp3",
    });
    this.components.set("the-day-of-judgement", {
      component: JudgementDayComponent,
      section: "The Danger - Sin",
      audioFile: "v1782934611/audio/1-the-danger-sin/4-the-day-of-judgement.mp3",
    });

    //The Futility - Death
    this.components.set("the-love-of-pleasure", {
      component: PleasureComponent,
      section: "The Futility - Death",
      audioFile: "v1782934611/audio/2-the-futility-death/1-the-love-of-pleasure.mp3",
    });
    this.components.set("work-and-toil", {
      component: ToilComponent,
      section: "The Futility - Death",
      audioFile: "v1782934611/audio/2-the-futility-death/2-work-and-toil.mp3",
    });
    this.components.set("the-love-of-wealth", {
      component: WealthComponent,
      section: "The Futility - Death",
      audioFile: "v1782934611/audio/2-the-futility-death/3-the-love-of-wealth.mp3",
    });
    this.components.set("the-day-of-death", {
      component: DeathComponent,
      section: "The Futility - Death",
      audioFile: "v1782934611/audio/2-the-futility-death/4-the-day-of-death.mp3",
    });

    //The Safety - Grace
    this.components.set("the-servant-of-god", {
      component: ServantComponent,
      section: "The Safety - Grace",
      audioFile: "v1782934611/audio/3-the-saftey-grace/1-the-servant-of-god.mp3",
    });
    this.components.set("the-bronze-serpent", {
      component: BronzeSerpentComponent,
      section: "The Safety - Grace",
      audioFile: "v1782934611/audio/3-the-saftey-grace/2-the-bronze-serpent.mp3",
    });
    this.components.set("the-victor", {
      component: VictorComponent,
      section: "The Safety - Grace",
      audioFile: "v1782934611/audio/3-the-saftey-grace/3-the-victor.mp3",
    });
    this.components.set("the-lamb-of-god", {
      component: LambComponent,
      section: "The Safety - Grace",
      audioFile: "v1782934611/audio/3-the-saftey-grace/4-the-lamb-of-god.mp3",
    });
    this.components.set("the-lion-of-judah", {
      component: LionComponent,
      section: "The Safety - Grace",
      audioFile: "v1782934611/audio/3-the-saftey-grace/5-the-lion-of-judah.mp3",
    });
    this.components.set("the-scapegoat", {
      component: ScapegoatComponent,
      section: "The Safety - Grace",
      audioFile: "v1782934611/audio/3-the-saftey-grace/6-the-scapegoat.mp3",
    });
    this.components.set("the-true-food", {
      component: FoodDrinkComponent,
      section: "The Safety - Grace",
      audioFile: "v1782934611/audio/3-the-saftey-grace/7-the-true-food.mp3",
    });
    this.components.set("the-door-of-salvation", {
      component: SalvationComponent,
      section: "The Safety - Grace",
      audioFile: "v1782934611/audio/3-the-saftey-grace/8-the-door-of-salvation.mp3",
    });
    this.components.set("the-rock-of-salvation", {
      component: RockComponent,
      section: "The Safety - Grace",
      audioFile: "v1782934611/audio/3-the-saftey-grace/9-the-rock-of-salvation.mp3",
    });
    this.components.set("the-son-of-god", {
      component: SonComponent,
      section: "The Safety - Grace",
      audioFile: "v1782934611/audio/3-the-saftey-grace/10-the-son-of-god.mp3",
    });

    //The Call - Faith
    this.components.set("the-race-of-faith", {
      component: RunTheRaceComponent,
      section: "The Call - Faith",
      audioFile: "v1782934611/audio/4-the-call-faith/1-the-race-of-faith.mp3",
    });
    this.components.set("a-clear-conscience", {
      component: ClearConscienceComponent,
      section: "The Call - Faith",
      audioFile: "v1782934611/audio/4-the-call-faith/2-a-clear-conscience.mp3",
    });
    this.components.set("abide-in-jesus", {
      component: AbideComponent,
      section: "The Call - Faith",
      audioFile: "v1782934611/audio/4-the-call-faith/3-abide-in-jesus.mp3",
    });
    this.components.set("a-new-heart", {
      component: NewHeartComponent,
      section: "The Call - Faith",
      audioFile: "v1782934611/audio/4-the-call-faith/4-a-new-heart.mp3",
    });
    this.components.set("born-again", {
      component: BornAgainComponent,
      section: "The Call - Faith",
      audioFile: "v1782934611/audio/4-the-call-faith/5-born-again.mp3",
    });

    //Our Response
    this.components.set("repentance-toward-god", {
      component: RepentComponent,
      section: "Our Response",
      audioFile: "v1782934611/audio/5-our-response/1-repentance-toward-god.mp3",
    });
    this.components.set("buried-in-baptism", {
      component: BaptismComponent,
      section: "Our Response",
      audioFile: "v1782934611/audio/5-our-response/2-buried-in-baptism.mp3",
    });
    this.components.set("believe-in-god", {
      component: BelieveInGodComponent,
      section: "Our Response",
      audioFile: "v1782934611/audio/5-our-response/3-believe-in-god.mp3",
    });
    this.components.set("obedience-to-holiness", {
      component: HolinessComponent,
      section: "Our Response",
      audioFile: "v1782934611/audio/5-our-response/4-obedience-to-holiness.mp3",
    });
    this.components.set("live-worthy", {
      component: WorthyOfCallComponent,
      section: "Our Response",
      audioFile: "v1782934611/audio/5-our-response/5-live-worthy.mp3",
    });
    this.components.set("persevere-by-remembrance", {
      component: PersevereComponent,
      section: "Our Response",
      audioFile: "v1782934611/audio/5-our-response/6-persevere-by-remembrance.mp3",
    });
    this.components.set("call-upon-the-lord", {
      component: CallUponHimComponent,
      section: "Our Response",
      audioFile: "v1782934611/audio/5-our-response/7-call-upon-the-lord.mp3",
    });

    //The Day of the Lord - Hope
    this.components.set("resurrection-of-life", {
      component: ResurrectionComponent,
      section: "The Day of the Lord - Hope",
      audioFile: "v1782934611/audio/6-the-hope-the-day-of-the-lord/1-resurrection-of-life.mp3",
    });
    this.components.set("new-spiritual-bodies", {
      component: SpiritualBodyComponent,
      section: "The Day of the Lord - Hope",
      audioFile: "v1782934611/audio/6-the-hope-the-day-of-the-lord/2-new-spiritual-bodies.mp3",
    });
    this.components.set("eternal-reward", {
      component: EternalRewardComponent,
      section: "The Day of the Lord - Hope",
      audioFile: "v1782934611/audio/6-the-hope-the-day-of-the-lord/3-eternal-reward.mp3",
    });
    this.components.set("everlasting-life", {
      component: EverlastingLifeComponent,
      section: "The Day of the Lord - Hope",
      audioFile: "v1782934611/audio/6-the-hope-the-day-of-the-lord/4-everlasting-life.mp3",
    });
    this.components.set("the-new-heaven", {
      component: NewHeavenEarthComponent,
      section: "The Day of the Lord - Hope",
      audioFile: "v1782934611/audio/6-the-hope-the-day-of-the-lord/5-the-new-heaven.mp3",
    });
    return this.components;
  }

  ngOnDestroy(): void {
    this.components.clear();
  }
}
