import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PsalmPageComponent } from "./psalm-page.component";

describe("PsalmPageComponent", () => {
  let component: PsalmPageComponent;
  let fixture: ComponentFixture<PsalmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PsalmPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsalmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
