import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgSelectModule } from '@ng-select/ng-select';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchboxComponent } from './header/searchbox/searchbox.component';
import { FacetsComponent } from './results/facets/facets.component';
import { FacetComponent } from './results/facets/facet/facet.component';
import { CountComponent } from './results/count/count.component';
import { SortComponent } from './results/sort/sort.component';
import { PaginationComponent } from './results/pagination/pagination.component';
import { UrlResolver } from './shared/services/url-resolver.service';
import { ResultsComponent } from './results/results.component';
import { ResultViewComponent } from './results/result-view/result-view.component';
import { QueryService } from './shared/services/query.service';

const appRoutes: Routes = [{ path: '', runGuardsAndResolvers: 'paramsOrQueryParamsChange',
 component: ResultsComponent, resolve: { query: UrlResolver } }];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchboxComponent,
    FacetsComponent,
    FacetComponent,
    CountComponent,
    SortComponent,
    PaginationComponent,
    ResultsComponent,
    ResultViewComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgSelectModule,
    PaginationModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UrlResolver,
    QueryService,
    UrlResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
