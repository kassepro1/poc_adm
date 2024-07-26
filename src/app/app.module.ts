import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SpecialityComponent } from './speciality/speciality.component';
import {MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatListItem, MatListModule, MatNavList} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTable, MatTableModule} from "@angular/material/table";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddSpecialityComponent } from './add-speciality/add-speciality.component';
import {MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {JsonFormsModule} from "@jsonforms/angular";
import {JsonFormsAngularMaterialModule} from "@jsonforms/angular-material";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    SpecialityComponent,
    AdminTemplateComponent,
    AddSpecialityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatPaginatorModule,
    MatTableModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormField,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    JsonFormsModule,
    JsonFormsAngularMaterialModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
