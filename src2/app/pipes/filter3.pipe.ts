import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter3'
})
export class Filter3Pipe implements PipeTransform {
    transform(countries3: any[], searchText3: string): any {
        return countries3.filter(country => // For one country search
            //country.name.toLowerCase().indexOf(searchText3.toLowerCase()) !== -1
            country.name.toLowerCase() === searchText3.toLowerCase());
    }

}