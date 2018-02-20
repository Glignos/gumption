import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  totalRecords: number;
  currentPage: number;
  pageSize = 10;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
      this.currentPage = this.route.queryParams['page'] || 1;
      this.route.data
      .map(data => data.query)
      .subscribe(json => {
        this.totalRecords = (json['hits']['total']);
      });
  }

  onPageChange(newPage: number) {
    this.router.navigateByUrl(`/?page=${newPage}&sort=${this.route.queryParams['sort']}&order=${this.route.queryParams['order']}`);
  }
}
