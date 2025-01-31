import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQueueModalComponent } from './create-queue-modal.component';

describe('CreateQueueModalComponent', () => {
  let component: CreateQueueModalComponent;
  let fixture: ComponentFixture<CreateQueueModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateQueueModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateQueueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
