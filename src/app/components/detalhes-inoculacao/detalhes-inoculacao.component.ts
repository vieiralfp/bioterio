import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-inoculacao',
  templateUrl: './detalhes-inoculacao.component.html',
  styleUrls: ['./detalhes-inoculacao.component.scss']
})
export class DetalhesInoculacaoComponent implements OnInit {

  constructor() { }

  public titulo = 'Detalhes';
  public itens = [{label: null, valor: null}];

  ngOnInit() {
  }

}
