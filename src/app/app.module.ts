import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule
} from "@angular/material";

import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { AlertComponent } from "./alert/alert.component";

@NgModule({
  declarations: [AppComponent, AlertComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NoopAnimationsModule,

    // Material Components
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,

    // Flex Layout
    FlexLayoutModule
  ],
  entryComponents: [AlertComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
