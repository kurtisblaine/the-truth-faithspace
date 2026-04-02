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

@Injectable({
  providedIn: "root",
})
export class GospelItemService implements OnDestroy {
  private components = new Map<string, ComponentType<GospelContentBaseComponent>>();

  init() {
    if (this.components.size) return this.components;

    //The Danger - Sin
    this.components.set("the-sin-nature", SinNatureComponent);
    this.components.set("god-knows", HeKnowsComponent);
    this.components.set("a-consuming-fire", ConsumingFireComponent);
    this.components.set("the-day-of-judgement", JudgementDayComponent);

    //THE FUTILTY - DEATH
    this.components.set("the-love-of-pleasure", PleasureComponent);
    this.components.set("work-and-toil", ToilComponent);
    this.components.set("the-love-of-wealth", WealthComponent);
    this.components.set("the-day-of-death", DeathComponent);

    //The Safety - Grace
    this.components.set("the-servant-of-god", ServantComponent);
    this.components.set("the-bronze-serpent", BronzeSerpentComponent);
    this.components.set("the-victor", VictorComponent);
    this.components.set("the-lamb-of-god", LambComponent);
    this.components.set("the-lion-of-judah", LionComponent);
    this.components.set("the-scapegoat", ScapegoatComponent);
    this.components.set("the-true-food", FoodDrinkComponent);
    this.components.set("the-door-of-salvation", SalvationComponent);
    this.components.set("the-rock-of-salvation", RockComponent);
    this.components.set("the-son-of-god", SonComponent);

    //The Call - Faith
    this.components.set("the-race-of-faith", RunTheRaceComponent);
    this.components.set("a-clear-conscience", ClearConscienceComponent);
    this.components.set("abide-in-jesus", AbideComponent);
    this.components.set("a-new-heart", NewHeartComponent);
    this.components.set("born-again", BornAgainComponent);

    //Our Response
    this.components.set("repentance-toward-god", RepentComponent);
    this.components.set("buried-in-baptism", BaptismComponent);
    this.components.set("believe-in-god", BelieveInGodComponent);
    this.components.set("obedience-to-holiness", HolinessComponent);
    this.components.set("live-worthy", WorthyOfCallComponent);
    this.components.set("persevere-by-rememberance", PersevereComponent);
    this.components.set("call-upon-the-lord", CallUponHimComponent);

    //The Day of the Lord - Hope
    this.components.set("resurrection-of-life", ResurrectionComponent);
    this.components.set("new-spiritual-bodies", SpiritualBodyComponent);
    this.components.set("eternal-reward", EternalRewardComponent);
    this.components.set("everlasting-life", EverlastingLifeComponent);
    this.components.set("the-new-heaven", NewHeavenEarthComponent);
    return this.components;
  }

  ngOnDestroy(): void {
    this.components.clear();
  }
}
