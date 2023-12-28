import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscernDetailComponent } from './discern-detail.component';

describe('DiscernDetailComponent', () => {
  let component: DiscernDetailComponent;
  let fixture: ComponentFixture<DiscernDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscernDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscernDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
