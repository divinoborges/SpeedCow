import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudVacaService } from 'src/app/services/crud-vaca.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  @Input() vaca;

  form;

  constructor(public activeModal: NgbActiveModal, private crudVaca: CrudVacaService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      _id: this.vaca._id,
      filial: this.vaca.filial,
      dataEntrada: new Date(this.vaca.dataEntrada).toISOString().substring(0,10),
      peso: this.vaca.peso,
    });
  }

  editar(): void{
    this.crudVaca.update(this.form.value);
  }

}
