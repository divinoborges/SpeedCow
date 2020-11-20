import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FilialComponent} from './filial/filial.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'filial/:id', component: FilialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
