import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries2',
  templateUrl: './countries2.component.html',
  styleUrls: ['./countries2.component.css']
})
export class Countries2Component implements OnInit {

    public countries2: Country[];
    public searchText2: string = "";

    constructor(private countriesService: CountriesService) { }

    ngOnInit() {
        this.countriesService.getAllCountries().subscribe((countries2) => {
            this.countries2 = countries2;
            //console.log(this.countries);
        });
    }
}
