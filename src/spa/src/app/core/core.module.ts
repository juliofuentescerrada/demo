import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class CoreModule { }
