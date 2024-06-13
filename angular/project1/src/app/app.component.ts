import { Component } from '@angular/core';
import { FirstCComponent } from './first-module/first-c/first-c.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstCComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project1';
}
