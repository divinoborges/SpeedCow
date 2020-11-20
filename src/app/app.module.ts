import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { PorcentagemPipe } from './pipes/porcentagem.pipe';
import { FilialComponent } from './filial/filial.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastroComponent } from './modals/cadastro/cadastro.component';
import { EditarComponent } from './modals/editar/editar.component';
import { ExcluirComponent } from './modals/excluir/excluir.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    PorcentagemPipe,
    FilialComponent,
    CadastroComponent,
    EditarComponent,
    ExcluirComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
