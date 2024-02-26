import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubCoreComponent } from './sub-core.component';

describe('SubCoreComponent', () => {
  let component: SubCoreComponent;
  let fixture: ComponentFixture<SubCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubCoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
