import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCoverStoriesComponent } from './daily-cover-stories.component';

describe('DailyCoverStoriesComponent', () => {
  let component: DailyCoverStoriesComponent;
  let fixture: ComponentFixture<DailyCoverStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyCoverStoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyCoverStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
