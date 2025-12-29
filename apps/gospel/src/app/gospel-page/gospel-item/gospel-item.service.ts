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

    //THE DANGER - SIN
    this.components.set("theSinNature", SinNatureComponent);
    this.components.set("GodKnows", HeKnowsComponent);
    this.components.set("aConsumingFire", ConsumingFireComponent);
    this.components.set("theDayOfJudgement", JudgementDayComponent);

    //THE FUTILTY - DEATH
    this.components.set("theLoveOfPleasure", PleasureComponent);
    this.components.set("workAndToil", ToilComponent);
    this.components.set("theLoveOfWealth", WealthComponent);
    this.components.set("theDayOfDeath", DeathComponent);

    //THE SAFETY - GRACE
    this.components.set("theServantOfGod", ServantComponent);
    this.components.set("theBronzeSerpent", BronzeSerpentComponent);
    this.components.set("theVictor", VictorComponent);
    this.components.set("theLambOfGod", LambComponent);
    this.components.set("theLion", LionComponent);
    this.components.set("theScapegoat", ScapegoatComponent);
    this.components.set("theTrueFoodAndTheTrueDrink", FoodDrinkComponent);
    this.components.set("theDoorOfEternalSalvation", SalvationComponent);
    this.components.set("theRockOfOurSalvation", RockComponent);
    this.components.set("theSonOfGod", SonComponent);

    //THE CALL - FAITH
    this.components.set("theRaceOfFaith", RunTheRaceComponent);
    this.components.set("aClearConscience", ClearConscienceComponent);
    this.components.set("abideInHim", AbideComponent);
    this.components.set("aNewHeart", NewHeartComponent);
    this.components.set("bornAgain", BornAgainComponent);

    //OUR RESPONSE
    this.components.set("repentance", RepentComponent);
    this.components.set("baptism", BaptismComponent);
    this.components.set("believeInGod", BelieveInGodComponent);
    this.components.set("obedienceToHoliness", HolinessComponent);
    this.components.set("liveWorthy", WorthyOfCallComponent);
    this.components.set("perseveranceByRememberance", PersevereComponent);
    this.components.set("callUponTheLord", CallUponHimComponent);

    //THE DAY OF THE LORD - HOPE
    this.components.set("theResurrectionOfLife", ResurrectionComponent);
    this.components.set("newSpiritualBodies", SpiritualBodyComponent);
    this.components.set("eternalReward", EternalRewardComponent);
    this.components.set("everlastingLife", EverlastingLifeComponent);
    this.components.set("theNewHeavenAndTheNewEarth", NewHeavenEarthComponent);
    return this.components;
  }

  ngOnDestroy(): void {
    this.components.clear();
  }
}
