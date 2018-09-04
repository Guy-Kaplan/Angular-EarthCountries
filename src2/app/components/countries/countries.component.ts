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
    public options: string[] = []; // All fields' content in the table
    public filteredOptions: string[] = [];
    public searchText: string = "";

    constructor(private countriesService: CountriesService) { }

    ngOnInit() {
        this.countriesService.getAllCountries().subscribe((countries) => {
            this.countries = countries;
            //console.log(this.countries);
            countries.forEach(element => {
                this.options.push(String(element.name));
                this.options.push(String(element.nativeName));
                if(element.capital != null && element.capital != ""){
                    this.options.push(String(element.capital));
                }
                this.options.push(String(element.population));
                
            });
            this.filteredOptions = this.options;
        });
    }

    public filter1(textToSearch: string): void {
        textToSearch = textToSearch.toLowerCase();
        let tmp: string[] = [];
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i].toLowerCase().includes(textToSearch)) {
                tmp.push(this.options[i]);
            }
        }
        this.filteredOptions = tmp;
    }


}
