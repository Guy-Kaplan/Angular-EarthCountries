import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries3',
  templateUrl: './countries3.component.html',
  styleUrls: ['./countries3.component.css']
})
export class Countries3Component implements OnInit {

    public countries3: Country[]; // All countries
    public options3: string[] = []; // All countries' names
    public filteredOptions3: string[] = [];
    public searchText3: string = "";

    constructor(private countriesService: CountriesService) { }

    ngOnInit() {
        this.countriesService.getAllCountries().subscribe((countries3) => {
            this.countries3 = countries3;
            //console.log(this.countries3);
            countries3.forEach(element => {
                if(element.name != null){
                    this.options3.push(String(element.name));
                }
            });
            this.filteredOptions3 = this.options3;
        });
    }

    public filter3(textToSearch: string): void {
        textToSearch = textToSearch.toLowerCase();
        let tmp: string[] = [];
        for (let i = 0; i < this.options3.length; i++) {
            if (this.options3[i].toLowerCase().includes(textToSearch)) {
                tmp.push(this.options3[i]);
            }
        }
        this.filteredOptions3 = tmp;
    }

}
