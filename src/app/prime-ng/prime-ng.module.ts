import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {SplitButtonModule} from 'primeng/splitbutton';
@NgModule({
exports:[
  ButtonModule,
  CardModule,
  MenubarModule,
  FieldsetModule,
  BrowserAnimationsModule,
  BrowserModule,
  ToolbarModule,
  TableModule,
  SplitButtonModule
]
})
export class PrimeNgModule { }
