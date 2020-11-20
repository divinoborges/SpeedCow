import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

interface Vaca{
  _id: string;
  filial: string;
  peso: number;
  dataEntrada: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudVacaService {

  constructor(private http: HttpClient) { }

  create(body: any){
    this.http.post('http://localhost:3000/vaca/', body).subscribe(r => {
      this.refresh();
    });
  }

  read(filialId: string): Observable<Vaca[]>{
    return this.http.get<Vaca[]>(`http://localhost:3000/vacas/${filialId}`);
  }

  update(vaca: Vaca){
      this.http.put(`http://localhost:3000/vaca/${vaca._id}`, vaca).subscribe(r => {
        this.refresh();
      });
  }

  delete(id: string){
    this.http.delete(`http://localhost:3000/vaca/${id}`).subscribe(r => {
      this.refresh();
    });
  }

  refresh(): void{
    window.location.reload();
  }
}
