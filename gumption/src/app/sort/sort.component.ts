import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  sortOptions: any;
  selectedSortOption: any;

  constructor() { }

  ngOnInit() {
    this.sortOptions = [{name: 'Best match', id: 1}, {name: 'Asc', id:2 }];
  }

}
