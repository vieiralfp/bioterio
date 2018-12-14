import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaObservacaoComponent } from './dia-observacao.component';

describe('DiaObservacaoComponent', () => {
  let component: DiaObservacaoComponent;
  let fixture: ComponentFixture<DiaObservacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaObservacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaObservacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
