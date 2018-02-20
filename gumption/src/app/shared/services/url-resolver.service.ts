import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Query } from '../interfaces/query';
import { QueryService } from '../services/query.service';

@Injectable()
export class UrlResolver implements Resolve<Object[]> {
  constructor(private router: Router,
              private queryService: QueryService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Object[]> {
    const query: Query = {
      queryString : route.queryParams['q'] || '',
      page : route.queryParams['page'] || null,
      sortBy : route.queryParams['sortBy'] || null,
      sortOrder : route.queryParams['order'] || null
    };
    return this.queryService.fetchResults(query);
  }
}
