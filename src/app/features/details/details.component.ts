import {Component, ElementRef, HostListener, ViewChild} from "@angular/core";
import {ObservableArray} from "@nativescript/core";
import {RadListView} from "nativescript-ui-listview";
import {Label} from "@nativescript/core";


@Component({
  moduleId: module.id,
  selector: "ns-details",
  templateUrl: "details.component.html"
})
export class DetailsComponent {
  _dataItems: any;
  @ViewChild('radListViewComponent', { static: false }) radListView: ElementRef<RadListView>;
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
    this.radListView.nativeElement
      .removeEventListener(RadListView.itemLoadingEvent +"," +
        RadListView.loadedEvent +","+
        RadListView.loadMoreDataRequestedEvent
      );
    this.radListView.nativeElement.disposeNativeView();
    this.label1.nativeElement.disposeNativeView();
    this.label2.nativeElement.disposeNativeView();

  }
}
