import { Component, OnInit } from '@angular/core';
import { QueueService } from '../../services/queue.service';
import { Queue } from '../../models/Queue';

@Component({
  selector: 'app-queue-dashboard',
  imports: [],
  templateUrl: './queue-dashboard.component.html',
  styleUrl: './queue-dashboard.component.css'
})
export class QueueDashboardComponent implements OnInit {
  queues: Queue[] = [];

  constructor(private queueService: QueueService) {}

  ngOnInit(): void {
    this.queueService.getQueues().subscribe((data: Queue[]) => {
      this.queues = data;
    });
  }
}