import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue-dashboard',
  imports: [],
  templateUrl: './queue-dashboard.component.html',
  styleUrl: './queue-dashboard.component.css'
})
export class QueueDashboardComponent implements OnInit {
  queues = [
    {
      name: "Madero Restaurant",
      people: 12
    },
    {
      name: "Outback Steak House",
      people: 54
    }
  ];

  ngOnInit(): void {
    console.log("queue");
  }
}