import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule
} from "@angular/material";

import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { AlertComponent } from "./alert/alert.component";

@NgModule({
  declarations: [AppComponent, AlertComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    // Material Components
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,

    // Flex Layout
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
