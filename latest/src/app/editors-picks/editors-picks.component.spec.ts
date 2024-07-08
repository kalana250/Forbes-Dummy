import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorsPicksComponent } from './editors-picks.component';

describe('EditorsPicksComponent', () => {
  let component: EditorsPicksComponent;
  let fixture: ComponentFixture<EditorsPicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorsPicksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorsPicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
