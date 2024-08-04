import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstCComponent } from './first-c/first-c.component';



@NgModule({
  declarations: [FirstCComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FirstCComponent
  ]
})
export class FirstModuleModule { }
