import { Component, Input } from '@angular/core';

@Component({
  selector: '[product-form]',
  standalone: true,
  imports: [],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {
  @Input() update!: boolean;
}
