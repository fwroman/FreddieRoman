import { Component, Input } from '@angular/core';
import { MIconComponent } from '../m-icon/m-icon.component';
import { ToastTypes } from '../../../dto/productDto';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[toast]',
  standalone: true,
  imports: [MIconComponent, CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  @Input() type!: ToastTypes;
  @Input() message!: string;
  public toastTypes = ToastTypes;
}
