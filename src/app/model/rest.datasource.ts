import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Student } from "./student.model";
import{Department} from "./department.model"
export const REST_URL = new InjectionToken("rest_url");
export const REST_URL_DEP = new InjectionToken("rest_url_dep");

@Injectable()
export class RestDataSource {
    
    constructor(private http: HttpClient,
        @Inject(REST_URL) private url: string,
        @Inject(REST_URL_DEP) private url_dep: string) { }

    getData(): Observable<Student[]> {
        return this.sendRequest<Student[]>("GET", this.url);
    }
    getDataDepartment(): Observable<Department[]> {
        return this.sendRequest<Department[]>("GET", this.url_dep);
    }

    saveStudent(student: Student): Observable<Student> {
        return this.sendRequest<Student>("POST", this.url, student);
    }

    updateStudent(student: Student): Observable<Student> {
        
        return this.sendRequest<Student>("PUT",`${this.url}/${student.id}`, student);
    }

    deleteStudent(id: number): Observable<Student> {
        return this.sendRequest<Student>("DELETE", `${this.url}/${id}`);
    }

    private sendRequest<T>(verb: string, url: string, body?: Student)
        : Observable<T> {
        return this.http.request<T>(verb, url, {
            body: body
        });
    }

}