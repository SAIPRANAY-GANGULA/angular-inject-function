import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn(): boolean {
    // some realtime logic
    return true;
  }
}
