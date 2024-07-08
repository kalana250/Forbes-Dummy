import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaVirusComponent } from './corona-virus.component';

describe('CoronaVirusComponent', () => {
  let component: CoronaVirusComponent;
  let fixture: ComponentFixture<CoronaVirusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoronaVirusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoronaVirusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
