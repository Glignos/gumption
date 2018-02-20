import { Component, OnInit, Input } from '@angular/core';
import { Facet } from '../../../models/facet';

@Component({
  selector: 'app-facet',
  templateUrl: './facet.component.html',
  styleUrls: ['./facet.component.css']
})
export class FacetComponent implements OnInit {
  
  @Input() facet: Facet;

  constructor() { }

  ngOnInit() {
  }

}
