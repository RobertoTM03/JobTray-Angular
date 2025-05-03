import { Injectable } from '@angular/core';
import { FirebaseUser } from '../models/firebaseUser';

@Injectable({ providedIn: 'root' })
export class UserSessionService {
  private currentUserData: FirebaseUser | null = null;
  private storageKey = 'jobSeekerData';

  setUserData(user: FirebaseUser) {
    this.currentUserData = user;
    localStorage.setItem(this.storageKey, JSON.stringify(user));
  }

  getUserData(): FirebaseUser | null {
    if (!this.currentUserData) {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        this.currentUserData = JSON.parse(stored);
      }
    }
    return this.currentUserData;
  }

  clearUserData() {
    this.currentUserData = null;
    localStorage.removeItem(this.storageKey);
  }

  isLoggedIn(): boolean {
    return this.getUserData() !== null;
  }
}
