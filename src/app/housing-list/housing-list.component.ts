import { Component, OnInit, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  // @Input() - Sharing data between child and parent directives and components

  // !!! So maybe we declare the data type to be received here, data itself is declared in app.components.ts    ==>  but we receive the actual locationList data from app.component.html into housing-list.component.html
  @Input() locationList: HousingLocation[] = [];
  // Type of this property: Array of elements of type HousingLocation
  
  // filter results - value to be type Array of HousingLocation
  results:HousingLocation[] = []

  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: string) {
    this.results = this.locationList
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