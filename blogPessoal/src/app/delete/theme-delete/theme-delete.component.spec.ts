import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeDeleteComponent } from './theme-delete.component';

describe('ThemeDeleteComponent', () => {
  let component: ThemeDeleteComponent;
  let fixture: ComponentFixture<ThemeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
