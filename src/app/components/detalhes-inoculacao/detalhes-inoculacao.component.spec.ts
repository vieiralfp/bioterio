import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesInoculacaoComponent } from './detalhes-inoculacao.component';

describe('DetalhesInoculacaoComponent', () => {
  let component: DetalhesInoculacaoComponent;
  let fixture: ComponentFixture<DetalhesInoculacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesInoculacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesInoculacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
