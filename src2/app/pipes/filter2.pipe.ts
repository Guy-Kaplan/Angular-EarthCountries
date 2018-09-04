import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {
    transform(countries2: any[], searchText2: string): any {
        return countries2.filter(country => // For table 2
            country.name.toLowerCase().indexOf(searchText2.toLowerCase()) !== -1 ||
            country.region.toLowerCase().indexOf(searchText2.toLowerCase()) !== -1 ||
            country.subregion.toLowerCase().indexOf(searchText2.toLowerCase()) !== -1 ||
            String(country.area).toLowerCase().indexOf(searchText2.toLowerCase()) !== -1 ||
            String(country.gini).toLowerCase().indexOf(searchText2.toLowerCase()) !== -1 ||
            String(country.numericCode).toLowerCase().indexOf(searchText2.toLowerCase()) !== -1 ||
            country.alpha3Code.toLowerCase().indexOf(searchText2.toLowerCase()) !== -1 ||
            country.topLevelDomain[0].toLowerCase().indexOf(searchText2.toLowerCase()) !== -1);
    }

}