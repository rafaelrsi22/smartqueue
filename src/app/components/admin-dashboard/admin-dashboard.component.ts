import { Component, OnInit, signal } from '@angular/core';
import { QueueService } from '../../services/queue.service';
import { Queue } from '../../models/Queue';
import { CreateQueueModalService } from '../../services/create-queue-modal.service';

@Component({
  selector: 'app-admin-dashboard',
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  queues: Queue[] = [];

  constructor(private queueService: QueueService, protected createQueueModalService: CreateQueueModalService) {}

  ngOnInit(): void {
    this.queueService.getQueues().subscribe((data) => {
      this.queues = data;
    })
  }
}
