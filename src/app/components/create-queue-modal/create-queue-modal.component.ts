import { Component } from '@angular/core';
import { CreateQueueModalService } from '../../services/create-queue-modal.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-create-queue-modal',
  imports: [],
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
  constructor(protected createQueueModalService: CreateQueueModalService) {}
}