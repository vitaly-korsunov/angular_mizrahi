import { NgModule } from "@angular/core";
import { Model } from "./repository.model";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource, REST_URL,REST_URL_DEP } from "./rest.datasource";
@NgModule({
 //providers: [Model, StaticDataSource],
 imports: [HttpClientModule],
 providers: [Model, RestDataSource,
    { provide: REST_URL, useValue: `http://${location.hostname}:3500/students` },
    { provide: REST_URL_DEP, useValue: `http://${location.hostname}:3500/departments`} ]
})
export class ModelModule { }