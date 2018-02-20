import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Result } from '../models/result';
import { Facet } from '../models/facet';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  records: Result[];
  facets: Facet[];

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.data
      .map(data => data.query)
      .subscribe(json => {
        this.records = (json['hits']['hits']);
        this.facets = this.extractFacets(json);
      });
  }

  extractFacets(json: any): Facet[] {
    let facets: Facet[] = [];

    let categories = json['aggregations'];
    let keys = Object.keys(categories);

    for(let key in keys) {
      console.log(categories[keys[key]]);
      if(categories[keys[key]]) {
        let facet: Facet = {
          title: keys[key],
          items: categories[keys[key]]['buckets'].map(item => {
            return {
              category: item['key'],
              docCount: item['doc_count']
            }
          }).slice(1,10)
        };
        console.log(facet);
        facets.push(facet);
      } 
    }

    return facets;
  }

}
