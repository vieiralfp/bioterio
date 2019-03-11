import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  constructor() { }

  public anoInicial = new Date();

  @Input() public input = {numero: null, ano: null};
  @Output() output: EventEmitter<object> = new EventEmitter();

    onSubmit() {
      this.output.emit(this.input);
      console.log(this.input);
    }

    onChange(valor) {
      this.input.ano = valor;
    }

    ngOnInit(): void {
     // this.input.ano = new Date().getFullYear();
    }

}
