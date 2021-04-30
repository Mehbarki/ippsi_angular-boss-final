import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArmeComponent } from './liste-arme.component';

describe('ListeArmeComponent', () => {
  let component: ListeArmeComponent;
  let fixture: ComponentFixture<ListeArmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeArmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeArmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
