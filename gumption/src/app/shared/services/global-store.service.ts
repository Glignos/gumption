import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Query } from '../interfaces/query';

@Injectable()
export class GlobalStoreService {
  records: Object[];
  total: number;
  

}