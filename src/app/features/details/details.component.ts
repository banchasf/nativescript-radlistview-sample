import {Component, ElementRef, HostListener, ViewChild} from "@angular/core";
import {ObservableArray} from "@nativescript/core";
import {Label} from "@nativescript/core";


@Component({
  moduleId: module.id,
  selector: "ns-details",
  templateUrl: "details.component.html"
})
export class DetailsComponent {
  _dataItems: any;
  @ViewChild('label2', {static: false}) label2: ElementRef<Label>;
  @ViewChild('label1', {static: false}) label1: ElementRef<Label>;
  groupingFunction: (item: any) => string = (item: any) => {
    return item.name;
  };

  get dataItems(): ObservableArray<any> {
    return this._dataItems;
  }

  ngOnInit(): void {
    this._dataItems = new ObservableArray([
      {
        "name": "Mr. A",
        "description": "Person #1"
      },
      {
        "name": "Mr. B",
        "description": "Person #2"
      }]);

  }
  @HostListener('unloaded')
  destroy() {
    console.log('Destroy details view');
  }
}
