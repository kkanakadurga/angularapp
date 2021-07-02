import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamproductsComponent } from './samproducts.component';

describe('SamproductsComponent', () => {
  let component: SamproductsComponent;
  let fixture: ComponentFixture<SamproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
