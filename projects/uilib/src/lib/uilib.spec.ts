import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UILib } from './uilib';

describe('UILib', () => {
  let component: UILib;
  let fixture: ComponentFixture<UILib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UILib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UILib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
