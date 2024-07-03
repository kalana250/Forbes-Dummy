import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedArticles1Component } from './featured-articles1.component';

describe('FeaturedArticles1Component', () => {
  let component: FeaturedArticles1Component;
  let fixture: ComponentFixture<FeaturedArticles1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedArticles1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedArticles1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
