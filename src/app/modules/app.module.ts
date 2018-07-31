import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../components/home/home.component';
import { CountriesComponent } from '../components/countries/countries.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing.module';
import { MenuComponent } from '../components/menu/menu.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FilterPipe } from '../pipes/filter.pipe';
import { Filter2Pipe } from '../pipes/filter2.pipe';
import { Page404Component } from '../components/page404/page404.component';
import { ThumbnailComponent } from '../components/thumbnail/thumbnail.component';
import { GameComponent } from '../components/game/game.component';
import { MatIconModule, MatInputModule, MatButtonModule, MatCheckboxModule } from "@angular/material";
import { AboutComponent } from '../components/about/about.component';
import { Countries2Component } from '../components/countries2/countries2.component';


@NgModule({
    declarations: [

        LayoutComponent,

        HeaderComponent,

        MenuComponent,

        HomeComponent,

        FilterPipe,

        Filter2Pipe,

        CountriesComponent,

        Page404Component,

        ThumbnailComponent,

        GameComponent,

        AboutComponent,

        Countries2Component],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        RoutingModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,

    ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }


