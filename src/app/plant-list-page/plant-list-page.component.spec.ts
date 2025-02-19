import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantListPageComponent } from './plant-list-page.component';

describe('PlantListPageComponent', () => {
  let component: PlantListPageComponent;
  let fixture: ComponentFixture<PlantListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
