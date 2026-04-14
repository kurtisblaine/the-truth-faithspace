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
};

@Injectable({
  providedIn: "root",
})
export class GospelItemService implements OnDestroy {
  private components = new Map<string, ComponentMetaData>();

  init() {
    if (this.components.size) return this.components;

    this.components.set("the-sin-nature", { component: SinNatureComponent, section: "The Danger - Sin" });
    this.components.set("god-knows", { component: HeKnowsComponent, section: "The Danger - Sin" });
    this.components.set("a-consuming-fire", { component: ConsumingFireComponent, section: "The Danger - Sin" });
    this.components.set("the-day-of-judgement", { component: JudgementDayComponent, section: "The Danger - Sin" });

    this.components.set("the-love-of-pleasure", { component: PleasureComponent, section: "The Futility - Death" });
    this.components.set("work-and-toil", { component: ToilComponent, section: "The Futility - Death" });
    this.components.set("the-love-of-wealth", { component: WealthComponent, section: "The Futility - Death" });
    this.components.set("the-day-of-death", { component: DeathComponent, section: "The Futility - Death" });

    this.components.set("the-servant-of-god", { component: ServantComponent, section: "The Safety - Grace" });
    this.components.set("the-bronze-serpent", { component: BronzeSerpentComponent, section: "The Safety - Grace" });
    this.components.set("the-victor", { component: VictorComponent, section: "The Safety - Grace" });
    this.components.set("the-lamb-of-god", { component: LambComponent, section: "The Safety - Grace" });
    this.components.set("the-lion-of-judah", { component: LionComponent, section: "The Safety - Grace" });
    this.components.set("the-scapegoat", { component: ScapegoatComponent, section: "The Safety - Grace" });
    this.components.set("the-true-food", { component: FoodDrinkComponent, section: "The Safety - Grace" });
    this.components.set("the-door-of-salvation", { component: SalvationComponent, section: "The Safety - Grace" });
    this.components.set("the-rock-of-salvation", { component: RockComponent, section: "The Safety - Grace" });
    this.components.set("the-son-of-god", { component: SonComponent, section: "The Safety - Grace" });

    this.components.set("the-race-of-faith", { component: RunTheRaceComponent, section: "The Call - Faith" });
    this.components.set("a-clear-conscience", { component: ClearConscienceComponent, section: "The Call - Faith" });
    this.components.set("abide-in-jesus", { component: AbideComponent, section: "The Call - Faith" });
    this.components.set("a-new-heart", { component: NewHeartComponent, section: "The Call - Faith" });
    this.components.set("born-again", { component: BornAgainComponent, section: "The Call - Faith" });

    this.components.set("repentance-toward-god", { component: RepentComponent, section: "Our Response" });
    this.components.set("buried-in-baptism", { component: BaptismComponent, section: "Our Response" });
    this.components.set("believe-in-god", { component: BelieveInGodComponent, section: "Our Response" });
    this.components.set("obedience-to-holiness", { component: HolinessComponent, section: "Our Response" });
    this.components.set("live-worthy", { component: WorthyOfCallComponent, section: "Our Response" });
    this.components.set("persevere-by-rememberance", { component: PersevereComponent, section: "Our Response" });
    this.components.set("call-upon-the-lord", { component: CallUponHimComponent, section: "Our Response" });

    this.components.set("resurrection-of-life", {
      component: ResurrectionComponent,
      section: "The Day of the Lord - Hope",
    });
    this.components.set("new-spiritual-bodies", {
      component: SpiritualBodyComponent,
      section: "The Day of the Lord - Hope",
    });
    this.components.set("eternal-reward", { component: EternalRewardComponent, section: "The Day of the Lord - Hope" });
    this.components.set("everlasting-life", {
      component: EverlastingLifeComponent,
      section: "The Day of the Lord - Hope",
    });
    this.components.set("the-new-heaven", {
      component: NewHeavenEarthComponent,
      section: "The Day of the Lord - Hope",
    });
    return this.components;
  }

  ngOnDestroy(): void {
    this.components.clear();
  }
}
