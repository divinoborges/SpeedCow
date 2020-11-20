import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudVacaService } from 'src/app/services/crud-vaca.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  @Input() id;

  form;

  constructor(public activeModal: NgbActiveModal, private crudVaca: CrudVacaService, private formBuilder: FormBuilder) {
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      filial: this.id,
      dataEntrada: '',
      peso: '',
    })
  }

  cadastrar(): void{
    this.crudVaca.create(this.form.value);
  }

}
