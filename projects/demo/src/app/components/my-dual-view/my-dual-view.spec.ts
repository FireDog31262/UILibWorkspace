import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDualView } from './my-dual-view';

describe('MyDualView', () => {
  let component: MyDualView;
  let fixture: ComponentFixture<MyDualView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDualView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDualView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
