import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MIconComponent } from '../m-icon/m-icon.component';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [RouterModule, MIconComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {}
