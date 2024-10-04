import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/generic/nav-bar/nav-bar.component';
import { ToastComponent } from './components/generic/toast/toast.component';
import { GenericSubjectService } from './subjects/generic-subject.service';
import { ToastTypes } from './dto/productDto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    NavBarComponent,
    ToastComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  toastData: { toastType: ToastTypes; message: string } | undefined;

  constructor(public genericSubjectService: GenericSubjectService) {}

  ngOnInit(): void {
    this.genericSubjectService.toastObservable.subscribe(
      (data: { toastType: ToastTypes; message: string } | undefined) => {
        this.toastData = data;
        this.hideToast();
      }
    );
  }

  /** Hides the toast after being available for a couple of seconds. */
  private hideToast() {
    setTimeout(() => {
      this.genericSubjectService.showHideToast(undefined);
    }, 4000);
  }
}
