import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  query: string;
  constructor( private router: Router) { }

  ngOnInit() {
    this.query = '';
  }

  search() {
  this.router.navigateByUrl(`/?q=${this.query}`);
  }
}
