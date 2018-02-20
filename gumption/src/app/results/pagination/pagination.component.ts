import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  totalRecords: number;
  currentPage: number;
  pageSize: number;

  totalResults: number;
  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.data
      .map(data => data.query)
      .subscribe(json => {
        this.totalResults = (json['hits']['total']);
      });
  }

}
