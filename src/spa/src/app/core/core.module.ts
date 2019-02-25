import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ShellComponent } from './components/shell/shell.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShellComponent, MenuComponent, FooterComponent],
  imports: [CommonModule, RouterModule, HttpClientModule]
})
export class CoreModule { }
