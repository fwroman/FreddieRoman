import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/generic/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
