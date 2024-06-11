import { Routes } from "@angular/router";
import { DemoComponent } from "src/app/page/demo/demo.component";
import { HomeComponent } from "src/app/page/home/home.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'home',component: HomeComponent },
    { path: 'demo', component: DemoComponent}
];
