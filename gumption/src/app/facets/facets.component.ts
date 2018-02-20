import { Component, OnInit } from '@angular/core';

import { Facet } from '../models/facet';

@Component({
  selector: 'app-facets',
  templateUrl: './facets.component.html',
  styleUrls: ['./facets.component.css']
})
export class FacetsComponent implements OnInit {

  facets: Facet[];

  constructor() { }

  ngOnInit() {
    this.facets = [
      {
        title: 'Document type',
        items: [{
          category: 'Article',
          number: 4
        },
        {
          category: 'Peer',
          number: 14
        },
        {
          category: 'Reviewed',
          number: 3
        }
        ]
      },
      {
        title: 'Identifier',
        items: [{
          category: 'doi',
          number: 4
        },
        {
          category: 'inh',
          number: 14
        },
        {
          category: 'issn',
          number: 3
        }
        ]
      }
    ];
  }

}
