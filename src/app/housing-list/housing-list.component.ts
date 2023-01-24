import { Component, OnInit, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  // Type of this property: Array of elements of type housing-location
  @Input() locationList: HousingListComponent[] = []

  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: string) {
    console.log(searchText)
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