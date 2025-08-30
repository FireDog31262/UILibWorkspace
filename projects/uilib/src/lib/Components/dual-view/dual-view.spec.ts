import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DualViewComponent } from './dual-view';

describe('DualViewComponent', () => {
  let component: DualViewComponent;
  let fixture: ComponentFixture<DualViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DualViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DualViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
