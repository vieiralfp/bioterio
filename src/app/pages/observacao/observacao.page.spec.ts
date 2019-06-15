import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservacaoPage } from './observacao.page';

describe('ObservacaoPage', () => {
  let component: ObservacaoPage;
  let fixture: ComponentFixture<ObservacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
