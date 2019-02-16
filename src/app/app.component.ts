import { Component } from "@angular/core";
import { AlertService } from "./alerts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Alert Application";
  constructor(private alertService: AlertService) {}

  successDialog() {
    this.alertService.success("Success", "You Successfully Logged in.");
  }

  errorDialog() {
    this.alertService.error("Oops!", "Error loading data.");
  }

  warningDialog() {
    this.alertService.warn("Sure?", "Are your sure to delete?");
  }

  infoDialog() {
    this.alertService.info("Messages Received", "You received 100 messages");
  }

  confirmDialog() {
    this.alertService.confirm("Delete");
  }

  confirmWithInputDialog() {
    this.alertService.confirmWithInput("Block", "Reason to Block", true);
  }
}
