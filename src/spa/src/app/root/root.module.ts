import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '../core/core.module';
import { RoutingModule } from './routing.module';
import { RootComponent } from './root.component';

@NgModule({
  declarations: [RootComponent],
  imports: [BrowserModule, RoutingModule, CoreModule],
  bootstrap: [RootComponent]
})
export class RootModule { }
