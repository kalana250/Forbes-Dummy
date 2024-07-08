import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forbes101Component } from './forbes101.component';

describe('Forbes101Component', () => {
  let component: Forbes101Component;
  let fixture: ComponentFixture<Forbes101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forbes101Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forbes101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
