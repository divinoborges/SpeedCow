import {Component, OnInit} from '@angular/core';
import {FilialService} from '../services/filial.service';
import {Observable} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FilialComponent} from '../filial/filial.component';

interface Filial {
  _id: string;
  nome: string;
  cidade: string;
  rebanho: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  filiais: Observable<Filial[]>;

  constructor(private filialService: FilialService, private modalService: NgbModal) {
    this.filiais = this.getFiliais();
  }

  ngOnInit(): void {
  }

  getFiliais(): Observable<Filial[]> {
    return this.filialService.getFiliais();
  }

}
