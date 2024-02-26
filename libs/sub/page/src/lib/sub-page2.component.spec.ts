import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubPage2Component } from './sub-page2.component';

describe('SubPage2Component', () => {
  let component: SubPage2Component;
  let fixture: ComponentFixture<SubPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubPage2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(SubPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
