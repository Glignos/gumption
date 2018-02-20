import { Component, OnInit, Input } from '@angular/core';

import { Facet } from '../../models/facet';

@Component({
  selector: 'app-facets',
  templateUrl: './facets.component.html',
  styleUrls: ['./facets.component.css']
})
export class FacetsComponent implements OnInit {

  @Input() facets: Facet[];

  constructor() { }

  ngOnInit() {
  }

}
