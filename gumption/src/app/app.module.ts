import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchboxComponent } from './header/searchbox/searchbox.component';
import { FacetsComponent } from './facets/facets.component';
import { FacetComponent } from './facets/facet/facet.component';
import { CountComponent } from './count/count.component';
import { SortComponent } from './sort/sort.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchboxComponent,
    FacetsComponent,
    FacetComponent,
    CountComponent,
    SortComponent,
    PaginationComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgSelectModule,
    PaginationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
