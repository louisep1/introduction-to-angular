import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  // @Input() decorator - Sharing data from parent directive and component to child directives and components 
  // !!! Declare the data type to be received here [child], data itself is declared in [parent] app.components.ts    ==>  but we receive the actual locationList data from [parent] app.component.html into [child] housing-list.component.html
  @Input() locationList: HousingLocation[] = [];
  // Type of this property: Array of elements of type HousingLocation
  
  // declare new variable - filter results - value to be type Array of HousingLocation
  results:HousingLocation[] = [];

  // @Output() decorator - value to be a new event emitter of type housingLocation, that passes data from child component up to parent
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();



  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: string) {
    // guard:
    if (!searchText) return
    this.results = this.locationList.filter(location => location.city.toLowerCase().includes(searchText.toLowerCase()))
  }

  selectHousingLocation(location: HousingLocation) {
    // call emit() here    (send the corresponding/matching location object up to parent)
    this.selectedLocationEvent.emit(location)
  }

}


// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-file-name',
//   templateUrl: './file-name.component.html',
//   styleUrls: ['./file-name.component.css']
// })
// export class FileNameComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }