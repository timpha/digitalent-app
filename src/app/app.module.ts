import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DragListComponent } from './components/drag-list/drag-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableComponent } from './components/table/table.component';
import { CdkTableModule } from '@angular/cdk/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import { CdkTableComponent } from './components/cdk-table/cdk-table.component';


@NgModule({
  declarations: [
    AppComponent,
    DragListComponent,
    TableComponent,
    CdkTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    NgbModule,
    FontAwesomeModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
