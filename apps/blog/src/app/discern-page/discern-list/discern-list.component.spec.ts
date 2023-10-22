import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DiscernListComponent } from "./discern-list.component";

describe("DiscernListComponent", () => {
  let component: DiscernListComponent;
  let fixture: ComponentFixture<DiscernListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiscernListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscernListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
