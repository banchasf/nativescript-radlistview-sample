import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { DetailsRoutingModule } from "./details-routing.module";
import { DetailsComponent } from "./details.component";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

@NgModule({
  imports: [NativeScriptCommonModule, DetailsRoutingModule, NativeScriptUIListViewModule],
  declarations: [DetailsComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DetailsModule {}
