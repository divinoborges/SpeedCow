import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

interface Filial{
  _id: string;
  nome: string;
  cidade: string;
  rebanho: number;
}

@Injectable({
  providedIn: 'root'
})
export class FilialService {

  constructor(private http: HttpClient) {
  }

  getFiliais(): Observable<Filial[]> {
    return this.http.get<Filial[]>('http://localhost:3000/filial');
  }

  getFilial(id: string): Observable<Filial> {
    return this.http.get<Filial>(`http://localhost:3000/filial/${id}`);
  }

}
