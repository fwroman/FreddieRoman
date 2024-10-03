import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MIconComponent } from './m-icon.component';

describe('MIconComponent', () => {
  let component: MIconComponent;
  let fixture: ComponentFixture<MIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
