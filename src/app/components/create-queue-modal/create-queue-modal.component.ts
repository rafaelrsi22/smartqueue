import { Component } from '@angular/core';
import { CreateQueueModalService } from '../../services/create-queue-modal.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { QueueService } from '../../services/queue.service';

@Component({
  selector: 'app-create-queue-modal',
  imports: [FormsModule],
  animations: [
    trigger("modalEnterLeave", [
      transition(":enter", [
        style({transform: "scale(0)", opacity: 0}),
        animate("300ms ease-out", style({transform: "scale(1)", opacity: 1}))
      ]),
      transition(":leave", [
        animate("300ms ease-out", style({transform: "scale(0)", opacity: 0}))
      ]),
    ]),
  ],
  templateUrl: './create-queue-modal.component.html',
  styleUrl: './create-queue-modal.component.css'
})
export class CreateQueueModalComponent {
  queueName: string = "";

  constructor(
    protected createQueueModalService: CreateQueueModalService,
    protected queueService: QueueService
  ) {}

  onSubmit(): void {
    this.queueService.createQueue(this.queueName);
    this.createQueueModalService.isOpen.set(false);
  }
}