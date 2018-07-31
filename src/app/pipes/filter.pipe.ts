import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(countries: any[], searchText: string): any {
        return countries.filter(country =>
            country.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
            country.nativeName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
            country.capital.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
            String(country.population).toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    }

}