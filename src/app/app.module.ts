import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";
import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModelModule } from "../app/model/model.module";
import { ValidationHelper } from "./core/validation_helper";
import { ValidationErrorsDirective } from "./core/validationErrors.directive";
import { HiLowValidatorDirective } from "./validation/hilow";
import { RouterModule } from "@angular/router";
import { NgToastModule } from 'ng-angular-popup';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MessageModule } from "./messages/message.module";
import{UnsavedGuard} from "./core/unsaved.guard"
import {NgConfirmModule} from 'ng-confirm-box';


@NgModule({
  declarations:
    [
      AppComponent,
      HiLowValidatorDirective,
      ValidationErrorsDirective,
      ValidationHelper,
      FormComponent,
      TableComponent,
      
    ],
  imports:
    [
      BrowserModule,
      ModelModule,
      routing,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule,
      NgToastModule,
      MatTableModule,
      MatButtonModule,
      MatInputModule,
      MatFormFieldModule,
      MatPaginatorModule,
      MatSortModule,
      MessageModule,
      NgConfirmModule,
    ],
  providers: [UnsavedGuard],
  bootstrap: [AppComponent,]
})
export class AppModule { }
