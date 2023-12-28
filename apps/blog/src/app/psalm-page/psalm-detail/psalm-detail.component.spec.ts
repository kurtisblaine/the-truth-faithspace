import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsalmDetailComponent } from './psalm-detail.component';

describe('PsalmDetailComponent', () => {
  let component: PsalmDetailComponent;
  let fixture: ComponentFixture<PsalmDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsalmDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsalmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
