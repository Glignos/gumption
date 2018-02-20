import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Result } from '../models/result';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  records: Result[];
  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.data
      .map(data => data.query)
      .subscribe(json => {
        this.records = (json['hits']['total']);
      });
  }

}
