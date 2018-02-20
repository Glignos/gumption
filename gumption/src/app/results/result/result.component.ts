import { Component, OnInit, Input } from '@angular/core';

import {Result} from '../../models/result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() result: Result;

  constructor() { }

  ngOnInit() {
  }

}
