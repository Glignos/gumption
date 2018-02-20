import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
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
