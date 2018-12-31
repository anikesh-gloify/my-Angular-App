import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyScrollComponent } from './lazy-scroll.component';

describe('LazyScrollComponent', () => {
  let component: LazyScrollComponent;
  let fixture: ComponentFixture<LazyScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
