import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Query } from '../interfaces/query';
import { RouterState } from '../interfaces/router-state';
import { QueryService } from '../services/query.service';

@Injectable()
export class UrlResolver implements Resolve<object[]> {
  constructor(
    private router: Router,
    private queryService: QueryService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<object[]> {
    const query: Query = {
      queryString: route.queryParams['q'] || '',
      page: route.queryParams['page'] || 1,
      sortBy: route.queryParams['sortBy'] || 'bestMatch',
      sortOrder: route.queryParams['order'] || 'asc'
    };
    return this.queryService.fetchResults(query);
  }
}
