import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeisDiasPage } from './seis-dias.page';

describe('SeisDiasPage', () => {
  let component: SeisDiasPage;
  let fixture: ComponentFixture<SeisDiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeisDiasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeisDiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
