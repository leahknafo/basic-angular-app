import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password:string): Observable<string> {
    if (email === 'a@a.com' && password === 'aaa') {
      return of('asdasd3232rfsef34f4').pipe(
        map(res => {
          this.setToken(res);
          return res;
        })
      );
    } else {
      return throwError('user or password incorrect');
    }
  }

  setToken(t: string) {
    window.localStorage.setItem(environment.tokenKey, t);
  }

  getToken() {
    return window.localStorage.getItem(environment.tokenKey);
  }

  isLogged(): boolean {
    return this.getToken() != null;
  }
}