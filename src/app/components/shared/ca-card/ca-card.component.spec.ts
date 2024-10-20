import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaCardComponent } from './ca-card.component';

describe('CaCardComponent', () => {
  let component: CaCardComponent;
  let fixture: ComponentFixture<CaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
