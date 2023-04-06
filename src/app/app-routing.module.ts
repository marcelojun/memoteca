import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentosComponent } from './pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListarPensamentosComponent } from './pensamentos/listar-pensamentos/listar-pensamentos.component';
import { ExcluirPensamentoComponent } from './pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [{
   path:'',
   redirectTo: 'listarPensamento',
   pathMatch: 'full'
},
{
   path:'criarPensamento',
   component: CriarPensamentosComponent
},
{
  path:'listarPensamento',
  component: ListarPensamentosComponent
},
{
  path:'listarPensamento/pensamentos/excluirPensamento/:id',
  component: ExcluirPensamentoComponent
}, 
{
  path:'listarPensamento/pensamentos/editarPensamento/:id',
  component: EditarPensamentoComponent
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
