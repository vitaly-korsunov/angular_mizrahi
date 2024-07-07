import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
export class SelectValidator {
    static Selected(selected: number): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            let val = parseFloat(control.value);
            if (isNaN(val) || val < selected) {
                return { "selected": 
                        { 
                            "selected": selected, "actualValue": val 
                       }};
            }
            return null;
        }
    }
}