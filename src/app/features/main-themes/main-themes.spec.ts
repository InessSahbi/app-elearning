import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainThemes } from './main-themes';

describe('MainThemes', () => {
  let component: MainThemes;
  let fixture: ComponentFixture<MainThemes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainThemes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainThemes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
