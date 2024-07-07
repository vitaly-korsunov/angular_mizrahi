import { Routes, RouterModule } from "@angular/router";
import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";
import { UnsavedGuard } from "./core/unsaved.guard";

const routes: Routes = [

    {
        path: "form/:mode/:id", component: FormComponent,
        canDeactivate: [UnsavedGuard]
    },
    {
        path: "form/:mode", component: FormComponent,
        canDeactivate: [UnsavedGuard]
    },

    /*    { path: "form/:mode/:id", component: FormComponent },
       { path: "form/:mode", component: FormComponent }, */
    { path: "table", component: TableComponent },
    { path: "", redirectTo: "/table", pathMatch: "full" },
]
export const routing = RouterModule.forRoot(routes
);