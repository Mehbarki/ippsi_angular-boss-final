import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquePartieComponent } from './statistique-partie.component';

describe('StatistiquePartieComponent', () => {
  let component: StatistiquePartieComponent;
  let fixture: ComponentFixture<StatistiquePartieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiquePartieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiquePartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
