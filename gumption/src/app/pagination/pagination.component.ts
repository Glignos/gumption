import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  totalRecords: number;
  currentPage: number;
  pageSize: number;

  constructor() { }

  ngOnInit() {
    this.totalRecords = 116;
    this.currentPage = 1;
    this.pageSize = 10;

  }

}
