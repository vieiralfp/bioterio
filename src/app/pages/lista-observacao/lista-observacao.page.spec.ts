import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaObservacaoPage } from './lista-observacao.page';

describe('ListaObservacaoPage', () => {
  let component: ListaObservacaoPage;
  let fixture: ComponentFixture<ListaObservacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaObservacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaObservacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
