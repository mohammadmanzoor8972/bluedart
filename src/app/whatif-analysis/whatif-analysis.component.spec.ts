import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatifAnalysisComponent } from './whatif-analysis.component';

describe('WhatifAnalysisComponent', () => {
  let component: WhatifAnalysisComponent;
  let fixture: ComponentFixture<WhatifAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatifAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatifAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
