import { Component } from "@angular/core";
import { ItemEventData } from "@nativescript/core";
import { RouterExtensions } from "@nativescript/angular";
import { FlickService } from "~/app/core";

@Component({
  moduleId: module.id,
  selector: "ns-home",
  templateUrl: "home.component.html"
})
export class HomeComponent {

  constructor(
    private routerExtensions: RouterExtensions,
  ) {}

  onDetailClick(): void {
    this.routerExtensions.navigate(['details']);
  }
}
