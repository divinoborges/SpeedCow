import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CrudVacaService} from '../services/crud-vaca.service';
import {ActivatedRoute, Router} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExcluirComponent } from '../modals/excluir/excluir.component';
import { CadastroComponent } from '../modals/cadastro/cadastro.component';
import { EditarComponent } from '../modals/editar/editar.component';
import { FilialService } from '../services/filial.service';

interface Filial {
  _id: string;
  nome: string;
  cidade: string;
  rebanho: number;
}

interface Vaca{
  _id: string;
  filial: string;
  peso: number;
  dataEntrada: string;
}

@Component({
  selector: 'app-filial',
  templateUrl: './filial.component.html',
  styleUrls: ['./filial.component.scss']
})
export class FilialComponent implements OnInit {

  filialId: string;
  vacas: Observable<Vaca[]>;
  filial: Observable<Filial>;
  constructor(private crudVaca: CrudVacaService, private route: ActivatedRoute, private modalService: NgbModal, private filialService: FilialService) {
    this.route.params.subscribe(params => {
      this.filialId = params.id;
      this.filial = this.getFilial();
    });
  }

  ngOnInit(): void {
    this.loadVacas();
  }

  getFilial(): Observable<Filial> {
    return this.filialService.getFilial(this.filialId);
  }

  loadVacas(): void{
    this.vacas = this.crudVaca.read(this.filialId);
  }

  editarModal(vaca: Vaca){
    const modalRef = this.modalService.open(EditarComponent, {size: 'lg'});
    modalRef.componentInstance.vaca = vaca;
  }

  cadastrarModal(){
    const modalRef = this.modalService.open(CadastroComponent, {size: 'lg'});
    modalRef.componentInstance.id = this.filialId;
  }

  confirmModal(id: string): void {
    const modalRef = this.modalService.open(ExcluirComponent);
    modalRef.componentInstance.id = id;
  }

}
