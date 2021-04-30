import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesPartiesComponent } from './liste-des-parties.component';

describe('ListeDesPartiesComponent', () => {
  let component: ListeDesPartiesComponent;
  let fixture: ComponentFixture<ListeDesPartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesPartiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
