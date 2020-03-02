import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDetailesComponent } from './demo-detailes.component';

describe('DemoDetailesComponent', () => {
  let component: DemoDetailesComponent;
  let fixture: ComponentFixture<DemoDetailesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDetailesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
