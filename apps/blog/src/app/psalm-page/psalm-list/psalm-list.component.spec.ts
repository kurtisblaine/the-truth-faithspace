import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PsalmListComponent } from "./psalm-list.component";

describe("PsalmListComponent", () => {
  let component: PsalmListComponent;
  let fixture: ComponentFixture<PsalmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PsalmListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsalmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
