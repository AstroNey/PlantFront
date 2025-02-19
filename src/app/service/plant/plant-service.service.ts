import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

    plants: any[] = [];

    constructor(private http: HttpClient) {
    }

    getAllPlants(limit: number): Observable<any> {
        //TODO cache
        return this.http.get<any>(`http://localhost:8080/plants?size=${(limit)}`);
    }
}
