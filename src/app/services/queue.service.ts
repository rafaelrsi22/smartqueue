import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Queue } from '../models/Queue';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
  queues = signal<Queue[]>([]);

  constructor(private http: HttpClient, protected router: Router) {}

  // ngOnInit(): void {
  //   this.getQueues().subscribe(this.queues);
  // }

  getQueues(): Observable<any> {
    const queues = this.http.get("http://localhost:3000/queue");
    return queues;
  }

  createQueue(name: string) {
    if (name.replaceAll(" ", "") == "") {
      throw new Error("Cannot create queue with empty name.");
    }

    this.http.post("http://localhost:3000/queue", {name}, {withCredentials: true, responseType: "text"}).subscribe(() => {
      this.getQueues().subscribe(this.queues.set);
    });
  }

  deleteQueue(queueId: Number) {
    this.http.delete(`http://localhost:3000/queue/${queueId}`, {responseType: "text", withCredentials: true}).subscribe(() => {
      this.getQueues().subscribe(this.queues.set);
    });
  }
}
