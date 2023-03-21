import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgeSettingsService {

  constructor() { }

  getSettings() {
    return {
      pollingInterval: 50000
    }
  }
}
