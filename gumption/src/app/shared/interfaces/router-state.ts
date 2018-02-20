import { Observable } from 'rxjs/Observable';
import { Query } from './query';
export interface RouterState {
  queryResult: Observable<object[]>;
  query: Query;
}
