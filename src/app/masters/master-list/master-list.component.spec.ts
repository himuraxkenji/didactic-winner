import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MasterListComponent } from './master-list.component';

describe('MasterListComponent', () => {
  let component: MasterListComponent;
  let fixture: ComponentFixture<MasterListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
