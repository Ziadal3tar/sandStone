import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurHighlightsComponent } from './our-highlights.component';

describe('OurHighlightsComponent', () => {
  let component: OurHighlightsComponent;
  let fixture: ComponentFixture<OurHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurHighlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
