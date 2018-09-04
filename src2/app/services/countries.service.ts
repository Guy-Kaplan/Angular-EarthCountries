import { Injectable } from '@angular/core';
import { Country } from '../models/country';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CountriesService {
    // DI
    public constructor(private httpClient: HttpClient) { }

    public getAllCountries(): Observable<Country[]> {
        //Returns Observable object:
        return this.httpClient.get<Country[]>("https://restcountries.eu/rest/v2/all");
    }
}
