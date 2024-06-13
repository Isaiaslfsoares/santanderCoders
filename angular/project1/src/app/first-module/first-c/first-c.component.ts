import { Component } from '@angular/core';

@Component({
  selector: 'app-first-c',
  standalone: true,
  imports: [],
  templateUrl: './first-c.component.html',
  styleUrl: './first-c.component.css'
})
export class FirstCComponent {

  public lastName: string = '';
  public name: string = '';

  public year: number = 2024;

  acrescentarAno() {
    this.year++;
  }

  decrescerAno() {
    this.year--;
  }
  actionBtn1(name: string) {
  this.name = 'Isaias';
  this.lastName = 'Soares';
}}
