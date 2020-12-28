import { Routes } from "@angular/router";
import { HomeComponent } from "./navbar/home/home.component";
import { InformationComponent } from "./navbar/information/information.component";
import { MapComponent } from "./navbar/map/map.component";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "information", component: InformationComponent},
  { path: "map", component: MapComponent},
  //{ path: "**", component:HomeComponent}
];
