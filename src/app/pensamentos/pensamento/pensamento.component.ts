import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})

export class PensamentoComponent {

@Input() pensamento = {
  conteudo:'I love Angular',
  autoria: 'MJS',
  modelo: 'modelo2'
}
constructor(){}

ngOnInit(): void{}

larguraPensamento(): string {
  if(this.pensamento.conteudo.length >= 256){
    return 'pensamento-g'
  }
  return 'pensamento-p'
}
}

