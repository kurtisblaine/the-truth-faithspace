import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DiscernPageComponent } from "./discern-page.component";

describe("DiscernPageComponent", () => {
  let component: DiscernPageComponent;
  let fixture: ComponentFixture<DiscernPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiscernPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscernPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
