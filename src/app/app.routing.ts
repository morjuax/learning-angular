// import modules of routes the angular

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// import components
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormComponent } from "./components/form/form.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { PageComponent } from "./components/page/page.component";
import { ErrorComponent } from "./components/error/error.component";

// arrayRoutes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'form', component: FormComponent },
  { path: 'movies', component: PeliculasComponent },
  { path: 'page', component: PageComponent }, // optional
  { path: 'page/:name', component: PageComponent },
  { path: '**', component: ErrorComponent },
];

// export module routes

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
