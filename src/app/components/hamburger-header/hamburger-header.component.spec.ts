import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerHeaderComponent } from './hamburger-header.component';

describe('HamburgerButtonComponent', () => {
  let component: HamburgerHeaderComponent;
  let fixture: ComponentFixture<HamburgerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamburgerHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamburgerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
