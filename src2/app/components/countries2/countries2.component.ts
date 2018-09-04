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
    public options2: string[] = []; // All fields' content in the table
    public filteredOptions2: string[] = [];
    public searchText2: string = "";

    constructor(private countriesService: CountriesService) { }

    ngOnInit() {
        this.countriesService.getAllCountries().subscribe((countries2) => {
            this.countries2 = countries2;
            //console.log(this.countries2);
            countries2.forEach(element => {
                if(element.name != null){
                    this.options2.push(String(element.name));
                }
                if(element.region != null){
                    this.options2.push(String(element.region));
                }
                if(element.subregion != null && element.subregion != ""){
                    this.options2.push(String(element.subregion));
                }
                if(element.area != null){
                    this.options2.push(String(element.area));
                }
                if(element.gini != null){
                    this.options2.push(String(element.gini));
                }
                if(element.numericCode != null){
                    this.options2.push(String(element.numericCode));
                }
                if(element.alpha3Code != null){
                    this.options2.push(String(element.alpha3Code));
                }
                if(element.topLevelDomain != null){
                    this.options2.push(String(element.topLevelDomain));
                }

            });
            this.filteredOptions2 = this.options2;
        });
    }

    public filter2(textToSearch: string): void {
        textToSearch = textToSearch.toLowerCase();
        let tmp: string[] = [];
        for (let i = 0; i < this.options2.length; i++) {
            if (this.options2[i].toLowerCase().includes(textToSearch)) {
                tmp.push(this.options2[i]);
            }
        }
        this.filteredOptions2 = tmp;
    }
}
