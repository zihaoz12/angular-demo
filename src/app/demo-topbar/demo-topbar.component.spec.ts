import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTopbarComponent } from './demo-topbar.component';

describe('DemoTopbarComponent', () => {
  let component: DemoTopbarComponent;
  let fixture: ComponentFixture<DemoTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
