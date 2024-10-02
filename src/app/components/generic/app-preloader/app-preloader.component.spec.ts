import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPreloaderComponent } from './app-preloader.component';

describe('AppPreloaderComponent', () => {
  let component: AppPreloaderComponent;
  let fixture: ComponentFixture<AppPreloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPreloaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
