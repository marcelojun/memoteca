import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent {

listaPensamentos= [
  {
    conteudo:'Comunicação entre componentes',
    autoria: 'Angular',
    modelo: 'modelo3'
  },
  {
    conteudo:'I love Angular',
    autoria: 'MJS',
    modelo: 'modelo2'
  },
  {
    conteudo:'Lorem ipsum dolor sit amet. Est Quis amet non maxime rerum sit odio voluptas aut iste debitis et asperiores cumque qui dolor illum? Aut exercitationem voluptatem non similique tempora eum dolore quia At alias optio.Ut sequi atque ad galisum consequatur et iusto voluptatem. ',
    autoria: 'MJS',
    modelo: 'modelo3'
  }
];

constructor(){}

ngOnInit(){}
}
