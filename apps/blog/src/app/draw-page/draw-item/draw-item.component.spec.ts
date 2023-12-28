import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawItemComponent } from './draw-item.component';

describe('DrawItemComponent', () => {
  let component: DrawItemComponent;
  let fixture: ComponentFixture<DrawItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
