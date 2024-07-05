import { Client } from './../models/client';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments.development';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  get() : Observable<Client[]>{
    return this.http.get<Client[]>(environment.apiBaseUrl+"/client");
  }

  create(client: any): Observable<string>{
    return this.http.post<string>(environment.apiBaseUrl+"/client",client);
  }

  update(client: Client): Observable<string>{
    return this.http.put<string>(environment.apiBaseUrl+"/client/"+client.id, client);
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(environment.apiBaseUrl+"/client/"+id);
  }
}
