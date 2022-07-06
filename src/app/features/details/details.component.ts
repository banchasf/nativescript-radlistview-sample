import {Component} from "@angular/core";
import {ObservableArray} from "@nativescript/core";

@Component({
  moduleId: module.id,
  selector: "ns-details",
  templateUrl: "details.component.html"
})
export class DetailsComponent {
  _dataItems: ObservableArray<any>;

  get dataItems(): ObservableArray<any> {
    return this._dataItems;
  }

  ngOnInit(): void {
    const items = [
      {
        "name": "Mr. A",
        "description": "Person #1"
      },
      {
        "name": "Mr. B",
        "description": "Person #2"
      }];
    this._dataItems = new ObservableArray(items);
  }

  ngOnDestroy() {
    console.log('Destroy details view');
  }
}
