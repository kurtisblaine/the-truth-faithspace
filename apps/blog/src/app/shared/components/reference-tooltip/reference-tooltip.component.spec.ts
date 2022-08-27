import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ReferenceTooltipComponent } from "./reference-tooltip.component";

describe("ReferenceTooltipComponent", () => {
  let component: ReferenceTooltipComponent;
  let fixture: ComponentFixture<ReferenceTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReferenceTooltipComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
