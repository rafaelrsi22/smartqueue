import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class CreateQueueModalService {
  isOpen = signal<boolean>(false);

  constructor() { }
}
