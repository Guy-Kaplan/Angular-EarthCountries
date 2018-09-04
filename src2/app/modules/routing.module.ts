import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { CountriesComponent } from '../components/countries/countries.component';
import { Countries2Component } from '../components/countries2/countries2.component';
import { Countries3Component } from '../components/countries3/countries3.component';
import { Page404Component } from '../components/page404/page404.component';
import { GameComponent } from '../components/game/game.component';
import { AboutComponent } from '../components/about/about.component';





const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "countries", component: CountriesComponent },
    { path: "countries2", component: Countries2Component },
    { path: "countries3", component: Countries3Component },
    { path: "game", component: GameComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    {path: "**", component: Page404Component},

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
    ],
    declarations: []
})
export class RoutingModule { }
