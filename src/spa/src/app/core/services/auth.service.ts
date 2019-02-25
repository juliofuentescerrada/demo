import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  get authenticated$(): Observable<boolean> {
    return this.authenticated.asObservable();
  }

  login() {
    return this.http.get('/assets/app.json').pipe(tap(x => this.authenticated.next(true)));
  }

  logout() {
    this.authenticated.next(false);
  }
}
