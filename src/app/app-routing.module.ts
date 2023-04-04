import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentosComponent } from './pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListarPensamentosComponent } from './pensamentos/listar-pensamentos/listar-pensamentos.component';

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
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
