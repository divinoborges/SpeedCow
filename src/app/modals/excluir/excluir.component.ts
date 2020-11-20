import { Component, OnInit, Input } from '@angular/core';
import { CrudVacaService } from 'src/app/services/crud-vaca.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent implements OnInit {

  @Input() id;

  constructor(private crudVaca: CrudVacaService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  delete(): void{
    this.crudVaca.delete(this.id);
  }

}