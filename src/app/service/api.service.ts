import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Person } from '../model/Person';
import { FilterDTO } from '../model/FilterDTO';

@Injectable()
export class ApiService {

    private baseUrl: string = 'http://localhost:8080/api/persons';

    constructor(private http: Http) { }

    filter(params?: FilterDTO): Promise<Person[]> {
        return this.http.get(this.baseUrl + this.filterToParams(params)).toPromise().then(response => response.json() as Person[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private filterToParams(params?: FilterDTO): string {
        let s: string = "?";
        if (params.ageFrom)
            s += `&ageFrom=${params.ageFrom}`;
        if (params.ageTo)
            s += `&ageTo=${params.ageTo}`;

        if (params.heightFrom)
            s += `&heightFrom=${params.heightFrom}`;
        if (params.heightTo)
            s += `&heightTo=${params.heightTo}`;

        if (params.compatibilityFrom)
            s += `&compatibilityFrom=${params.compatibilityFrom}`;
        if (params.compatibilityTo)
            s += `&compatibilityTo=${params.compatibilityTo}`;

        if (params.distance)
            s += `&distance=${params.distance}`;

        if (params.hasPhoto)
            s += `&hasPhoto=${params.hasPhoto}`;

        if (params.favourite)
            s += `&favourite=${params.favourite}`;

        if (params.inContact)
            s += `&inContact=${params.inContact}`;

        return s;
    }
}