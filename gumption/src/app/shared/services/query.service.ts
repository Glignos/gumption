import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Query } from '../interfaces/query';

@Injectable()
export class QueryService {
  url = 'https://videos.cern.ch/api/records/';

  constructor(private http: Http) {}
  fetchResults(query: Query): Observable<any> { // fixme find out api result
    return this.http
    // .get(`${this.url}/search?q=${query.queryString}&page=${query.page}&sort=${query.sortType}`)
    .get(`${this.url}`)
    .map(res => res.json());
  }
}
