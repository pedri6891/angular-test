import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraCreateComponent } from './obra-create.component';

describe('ObraCreateComponent', () => {
  let component: ObraCreateComponent;
  let fixture: ComponentFixture<ObraCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObraCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObraCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
