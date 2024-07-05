import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Painting } from '../models/painting';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments.development';

@Injectable({
  providedIn: 'root'
})
export class PaintingsService {

  constructor(private http: HttpClient) { }

  get() : Observable<Painting[]>{
    return this.http.get<Painting[]>(environment.apiBaseUrl+"/painting");
  }

  create(painting: any): Observable<string>{
    return this.http.post<string>(environment.apiBaseUrl+"/painting",painting);
  }

  update(painting: Painting): Observable<string>{
    return this.http.put<string>(environment.apiBaseUrl+"/painting/"+painting.id, painting);
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(environment.apiBaseUrl+"/painting/"+id);
  }
}
