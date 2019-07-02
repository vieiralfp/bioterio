import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CaixaService } from 'src/app/services/caixa.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router,
              private caixaService: CaixaService) { }

    public agora: Date;
    public agora21;

  ngOnInit() {
    this.agora = new Date();
    this.agora21 = this.agora.getTime() + (21 * 24 * 60 * 60 * 1000);
  }

}
