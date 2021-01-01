import { Routes } from "@angular/router";
import { HomeComponent } from "./navbar/home/home.component";
import { InformationComponent } from "./navbar/information/information.component";
import { MapComponent } from "./navbar/map/map.component";
import { PageNotFoundComponentComponent } from "./navbar/page-not-found-component/page-not-found-component.component";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "information", component: InformationComponent},
  { path: "map", component: MapComponent},
  { path: "**", component:PageNotFoundComponentComponent}   // Wildcard route for a 404 page
];
