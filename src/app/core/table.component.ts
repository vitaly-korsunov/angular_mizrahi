import { Component, ViewChild } from "@angular/core";
import { Student } from "../model/student.model";
import { Department } from "../model/department.model";
import { Model } from "../model/repository.model";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort';

@Component({
    selector: "paTable",
    templateUrl: "table.component.html"
})
export class TableComponent {
   
    departments!: Department[];

    public dataSource!: MatTableDataSource<Student>;
    public departmentMap: Map<number, string> = new Map<number, string>()
    
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(private model: Model) {
        this.dataSource = new MatTableDataSource<Student>();
        this.model.getStudentsObservable().subscribe(newData => {
            this.dataSource.data = newData;
        })
    }

    getStudent(key: number): Student | undefined {
        return this.model.getStudent(key);
    }

    getStudents() {     
        return this.dataSource;
    }

    deleteStudent(key?: number) {
        if (key != undefined) {
            this.model.deleteStudent(key);
        }
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
           this.dataSource.sort = this.sort;
    }

    ngAfterContentChecked() {
        this.refreshStudentDepListMap();
    }

    refreshStudentDepListMap() {
        this.departments = this.model.getDepartments();
        for (let i = 0; i < this.departments.length; i++) {
            this.departmentMap.set(this.departments[i].id, this.departments[i].department)
        }
    }
    
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }


    colsAndRows: string[] = ['id', 'name', 'department', 'bdate', 'gender', 'active', 'level', 'buttons'];
}