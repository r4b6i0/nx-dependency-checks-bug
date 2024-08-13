import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib01Component } from './lib-01.component';

describe('Lib01Component', () => {
  let component: Lib01Component;
  let fixture: ComponentFixture<Lib01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib01Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
