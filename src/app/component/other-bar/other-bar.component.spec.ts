import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherBarComponent } from './other-bar.component';

describe('OtherBarComponent', () => {
  let component: OtherBarComponent;
  let fixture: ComponentFixture<OtherBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherBarComponent]
    });
    fixture = TestBed.createComponent(OtherBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
