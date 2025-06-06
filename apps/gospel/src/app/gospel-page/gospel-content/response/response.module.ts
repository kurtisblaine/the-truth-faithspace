import { NgModule } from "@angular/core";
import { BaptismComponent } from "./baptism.component";
import { BelieveInGodComponent } from "./believe-in-God.component";
import { CallUponHimComponent } from "./call-upon-Him.component";
import { HolinessComponent } from "./holiness.component";
import { PersevereComponent } from "./persevere.component";
import { RepentComponent } from "./repent.component";
import { WorthyOfCallComponent } from "./worthy-of-call.component";

const responseComponents = [
  RepentComponent,
  BaptismComponent,
  HolinessComponent,
  CallUponHimComponent,
  WorthyOfCallComponent,
  PersevereComponent,
  BelieveInGodComponent,
];

@NgModule({
  imports: responseComponents,
  exports: responseComponents,
})
export class ResponseModule {}
