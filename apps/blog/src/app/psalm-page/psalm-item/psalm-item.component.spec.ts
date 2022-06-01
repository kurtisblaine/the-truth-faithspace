import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PsalmItemComponent } from "./psalm-item.component";

describe("PsalmItemComponent", () => {
  let component: PsalmItemComponent;
  let fixture: ComponentFixture<PsalmItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PsalmItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsalmItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
