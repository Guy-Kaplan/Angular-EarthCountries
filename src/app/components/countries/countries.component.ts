import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { CountriesService } from '../../services/countries.service';

@Component({
    selector: 'app-countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

    public countries: Country[];
    public searchText: string = "";

    constructor(private countriesService: CountriesService) { }

    ngOnInit() {
        this.countriesService.getAllCountries().subscribe((countries) => {
            this.countries = countries;
            //console.log(this.countries);
        });
    }


}

