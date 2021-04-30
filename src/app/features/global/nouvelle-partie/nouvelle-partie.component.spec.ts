import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvellePartieComponent } from './nouvelle-partie.component';

describe('NouvellePartieComponent', () => {
  let component: NouvellePartieComponent;
  let fixture: ComponentFixture<NouvellePartieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvellePartieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvellePartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
