import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopApplicantsComponent } from './shop-applicants.component';

describe('ShopApplicantsComponent', () => {
  let component: ShopApplicantsComponent;
  let fixture: ComponentFixture<ShopApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopApplicantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
