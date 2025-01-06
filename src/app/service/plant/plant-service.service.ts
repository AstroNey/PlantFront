import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

    constructor(private http: HttpClient) { }

    getAllPlants(): Observable<any> {
        return this.http.get<any>('http://localhost:8080/plants');
    }
}
