import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkCapitalComponent } from './dark-capital.component';

describe('DarkCapitalComponent', () => {
  let component: DarkCapitalComponent;
  let fixture: ComponentFixture<DarkCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkCapitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
