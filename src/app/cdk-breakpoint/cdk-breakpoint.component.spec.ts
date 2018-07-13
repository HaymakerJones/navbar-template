import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkBreakpointComponent } from './cdk-breakpoint.component';

describe('CdkBreakpointComponent', () => {
  let component: CdkBreakpointComponent;
  let fixture: ComponentFixture<CdkBreakpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkBreakpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkBreakpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
