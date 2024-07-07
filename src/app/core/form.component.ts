import { Component } from "@angular/core";
import { FormControl, NgForm, Validators, FormGroup } from "@angular/forms";
import { Student } from "../model/student.model";
import { Model } from "../model/repository.model"
import { LimitValidator } from "../validation/limit";
import { SelectValidator } from "../validation/select";
import { ActivatedRoute, Router } from "@angular/router";
import { Department } from "../model/department.model";

@Component({
    selector: "paForm",
    templateUrl: "form.component.html",
    styleUrls: ["form.component.scss"]
})
export class FormComponent {

    student: Student = new Student();
    editing: boolean = false;
    departments?: Department[]

    constructor(public model: Model, activeRoute: ActivatedRoute,
        public router: Router) {

        this.departments = this.model.getDepartments();
 
        activeRoute.params.subscribe(params => {
            this.editing = params["mode"] == "edit";
            let id = params["id"];          
            if (id != null) {
                model.getStudentObservable(id).subscribe(p => {
                    Object.assign(this.student, p || new Student());
                    this.studentForm.patchValue(this.student);
                });    
            }
            else{
                this.studentForm.patchValue(new Student);
            }
        })
    }

    studentForm: FormGroup = new FormGroup({
        name: new FormControl("", {
            validators: [
                Validators.required,
                Validators.minLength(3),
                Validators.pattern("^[A-Za-z ]+$")
            ],
            updateOn: "change"
        }),
        department: new FormControl("", {
            validators: [
                Validators.required,
                SelectValidator.Selected(0)
            ],
        }),
        bdate: new FormControl("", { validators: Validators.required }),
        gender: new FormControl("", { validators: Validators.required }),
        active: new FormControl("", {}),
        level: new FormControl("", {
            validators: [
                Validators.required, Validators.pattern("^[0-9\.]+$"),
                LimitValidator.Limit(300)
            ]
        }),
    });

    unsavedChanges(): boolean {
        return this.studentForm.dirty;
    }

    submitForm() {
        if (this.studentForm.valid) {
            Object.assign(this.student, this.studentForm.value);
            this.model.saveStudent(this.student);
            this.router.navigateByUrl("/");
        }
    }

 /*    resetForm() {
        this.editing = true;
        this.student = new Student();
        this.studentForm.reset();
    } */
}