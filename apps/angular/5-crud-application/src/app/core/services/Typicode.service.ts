import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { Typicode } from '../models/Typicode';

@Injectable({
  providedIn: 'root',
})
export class TypicodeService {
  private http = inject(HttpClient);
  //readonly tycodes = signal<Typicode[]>([]);

  public getTypicodes(): Observable<Typicode[]> {
    return this.http.get<Typicode[]>(environment.api_url);
  }

  public updateTypicode(typicode: Typicode): Observable<Typicode> {
    return this.http.put<Typicode>(
      `${environment.api_url}/${typicode.id}`,
      typicode,
    );
  }

  public borrarTypicode(id: number): Observable<Typicode> {
    return this.http.delete<Typicode>(`${environment.api_url}/${id}`);
  }
}
