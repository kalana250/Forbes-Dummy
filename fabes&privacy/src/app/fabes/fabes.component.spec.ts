import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabesComponent } from './fabes.component';

describe('FabesComponent', () => {
  let component: FabesComponent;
  let fixture: ComponentFixture<FabesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
