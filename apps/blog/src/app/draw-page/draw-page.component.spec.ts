import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DrawPageComponent } from "./draw-page.component";

describe("DrawPageComponent", () => {
  let component: DrawPageComponent;
  let fixture: ComponentFixture<DrawPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrawPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
