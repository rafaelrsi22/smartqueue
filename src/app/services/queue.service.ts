import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
  constructor(private http: HttpClient) {}

  getQueues(): Observable<any> {
    const queues = this.http.get("http://localhost:3000/queue");
    return queues;
  }
}
