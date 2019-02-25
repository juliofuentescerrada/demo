import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShellComponent } from '../core/shell/shell.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [BrowserModule, CoreModule],
  bootstrap: [ShellComponent]
})
export class RootModule { }
